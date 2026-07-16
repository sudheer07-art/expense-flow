from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.auth.hashing import hash_password
from app.auth.jwt_handler import create_access_token
from app.core.logger import logger
from app.core.security import verify_password
from app.models.user import User
from app.repositories.user_repository import UserRepository
from app.schemas.user import UserCreate


class UserService:

    @staticmethod
    def register(
        db: Session,
        user: UserCreate
    ):
        logger.info(f"Registration attempt: {user.email}")

        existing_user = UserRepository.get_user_by_email(
            db,
            user.email
        )

        if existing_user:
            logger.warning(
                f"Registration failed (email already exists): {user.email}"
            )

            raise HTTPException(
                status_code=400,
                detail="Email already registered"
            )

        new_user = User(
            name=user.name,
            email=user.email,
            password=hash_password(user.password)
        )

        created_user = UserRepository.create_user(
            db,
            new_user
        )

        logger.info(
            f"User registered successfully: {user.email}"
        )

        return created_user

    @staticmethod
    def login(
        db: Session,
        email: str,
        password: str
    ):
        logger.info(f"Login attempt: {email}")

        db_user = UserRepository.get_user_by_email(
            db,
            email
        )

        if not db_user:
            logger.warning(
                f"Login failed (user not found): {email}"
            )

            raise HTTPException(
                status_code=401,
                detail="Invalid email or password"
            )

        if not verify_password(
            password,
            db_user.password
        ):
            logger.warning(
                f"Login failed (incorrect password): {email}"
            )

            raise HTTPException(
                status_code=401,
                detail="Invalid email or password"
            )

        token = create_access_token(
            {
                "sub": str(db_user.id),
                "email": db_user.email
            }
        )

        logger.info(
            f"Login successful: {email}"
        )

        return {
            "access_token": token,
            "token_type": "bearer"
        }