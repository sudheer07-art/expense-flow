from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm
from app.database.session import get_db

from app.auth.jwt_handler import get_current_user

from app.schemas.user import (
    UserCreate,
    UserLogin,
    UserResponse,
    UserUpdate,
    Token,
)

from app.services.user_services import UserService


router = APIRouter(
    prefix="/users",
    tags=["Users"],
)


# ---------------------------------
# Register User
# ---------------------------------

@router.post(
    "/register",
    response_model=UserResponse,
    status_code=201,
)
def register(
    user: UserCreate,
    db: Session = Depends(get_db),
):

    return UserService.register(
        db=db,
        user=user,
    )



# ---------------------------------
# Login User
# ---------------------------------

@router.post(
    "/login",
    response_model=Token,
)
def login(
    user: UserLogin,
    db: Session = Depends(get_db),
):

    return UserService.login(
        db=db,
        email=user.email,
        password=user.password,
    )



# ---------------------------------
# Get Current User
# ---------------------------------

@router.get(
    "/me",
    response_model=UserResponse,
)
def get_profile(
    current_user=Depends(get_current_user),
):

    return current_user



# ---------------------------------
# Update Profile
# ---------------------------------

@router.put(
    "/profile",
    response_model=UserResponse,
)
def update_profile(
    data: UserUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):

    return UserService.update_profile(
    db=db,
    user_id=current_user.id,
    user_data=data,
)
@router.post(
    "/token",
    response_model=Token,
)
def login_for_swagger(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db),
):

    return UserService.login(
        db=db,
        email=form_data.username,
        password=form_data.password,
    )
@staticmethod
def update_password(
    db: Session,
    user: User
):

    db.commit()
    db.refresh(user)

    return user