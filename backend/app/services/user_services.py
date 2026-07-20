from fastapi import HTTPException
from sqlalchemy.orm import Session
from app.schemas.user import UserUpdate
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
        print("LOGIN EMAIL:", email)
        print("LOGIN PASSWORD:", password)
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
    @staticmethod
    def update_profile(
        db: Session,
        current_user: User,
        data: UserUpdate
    ):

        existing_user = (
            UserRepository.get_user_by_email(
                db,
                data.email
            )
        )


        if (
            existing_user
            and existing_user.id != current_user.id
        ):
            raise HTTPException(
                status_code=400,
                detail="Email already used"
            )


        return UserRepository.update_user(
            db=db,
            user=current_user,
            name=data.name,
            email=data.email
        )
    @staticmethod
    def update_profile(
    db: Session,
    user_id: int,
    user_data: UserUpdate
):

        user = (
        db.query(User)
        .filter(
            User.id == user_id
        )
        .first()
    )


        if not user:
            raise HTTPException(
            status_code=404,
            detail="User not found"
        )


        existing_user = (
        db.query(User)
        .filter(
            User.email == user_data.email,
            User.id != user_id
        )
        .first()
    )


        if existing_user:
            raise HTTPException(
            status_code=400,
            detail="Email already in use"
        )


        user.name = user_data.name
        user.email = user_data.email


        return UserRepository.update_user(
        db,
        user
    )
#     @staticmethod
#     def update_profile(
#     db: Session,
#     user_id: int,
#     user_data
# ):

#         user = (
#         db.query(User)
#         .filter(
#             User.id == user_id
#         )
#         .first()
#     )


#         if not user:
#             raise HTTPException(
#             status_code=404,
#             detail="User not found"
#         )


#     # Check email already used by another user

#         existing_user = (
#         db.query(User)
#         .filter(
#             User.email == user_data.email,
#             User.id != user_id
#         )
#         .first()
#     )


#         if existing_user:
#             raise HTTPException(
#             status_code=400,
#             detail="Email already in use"
#         )


#         user.name = user_data.name
#         user.email = user_data.email


#         return UserRepository.update_user(
#         db,
#         user
#     )
# #     @staticmethod
# #     def change_password(
# #     db: Session,
# #     user_id: int,
# #     current_password: str,
# #     new_password: str,
# # ):

# #         user = (
# #         db.query(User)
# #         .filter(
# #             User.id == user_id
# #         )
# #         .first()
# #     )


# #         if not user:
# #             raise HTTPException(
# #             status_code=404,
# #             detail="User not found"
# #         )


# #     # Verify old password

# #         if not verify_password(
# #         current_password,
# #         user.password
# #     ):

# #             raise HTTPException(
# #             status_code=400,
# #             detail="Current password is incorrect"
# #         )


# #     # Update password

# #         user.password = hash_password(
# #         new_password
# #     )


# #         return UserRepository.update_password(
# #         db=db,
# #         user=user
# #     )