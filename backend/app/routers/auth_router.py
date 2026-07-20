# from fastapi import APIRouter, Depends, Request
# from fastapi.security import OAuth2PasswordRequestForm
# from sqlalchemy.orm import Session

# from app.database.session import get_db

# from app.auth.jwt_handler import get_current_user

# from app.schemas.user import (
#     UserCreate,
#     UserLogin,
#     UserResponse,
#     UserUpdate,
#     Token,
#     ChangePasswordRequest,
# )

# from app.services.user_services import UserService


# router = APIRouter(
#     prefix="/auth",
#     tags=["Authentication"]
# )



# # Register

# @router.post(
#     "/register",
#     response_model=UserResponse,
#     status_code=201
# )
# def register(
#     user: UserCreate,
#     db: Session = Depends(get_db)
# ):

#     return UserService.register(
#         db=db,
#         user=user
#     )



# # Normal frontend login

# # @router.post(
# #     "/login",
# #     response_model=Token
# # )
# # def login(
# #     user: UserLogin = None,
# #     form_data: OAuth2PasswordRequestForm = Depends(),
# #     db: Session = Depends(get_db)
# # ):

# #     if user:
# #         email = user.email
# #         password = user.password

# #     else:
# #         email = form_data.username
# #         password = form_data.password


# #     return UserService.login(
# #         db=db,
# #         email=email,
# #         password=password
# #     )
# # Normal frontend login

# # Login (JSON + Form compatibility)

# @router.post(
#     "/login",
#     response_model=Token
# )
# async def login(
#     request: Request,
#     db: Session = Depends(get_db)
# ):

#     content_type = request.headers.get(
#         "content-type",
#         ""
#     )
# # @router.post(
# #     "/login",
# #     response_model=Token
# # )
# # def login(
# #     user: UserLogin,
# #     db: Session = Depends(get_db)
# # ):

# #     return UserService.login(
# #         db=db,
# #         email=user.email,
# #         password=user.password
# #     )


#     if "application/json" in content_type:

#         data = await request.json()

#         email = data.get("email")
#         password = data.get("password")


#     else:

#         form = await request.form()

#         email = form.get("username")
#         password = form.get("password")



#     return UserService.login(
#         db=db,
#         email=email,
#         password=password
#     )

# # Swagger login

# @router.post(
#     "/token",
#     response_model=Token
# )
# def login_for_swagger(
#     form_data: OAuth2PasswordRequestForm = Depends(),
#     db: Session = Depends(get_db)
# ):

#     return UserService.login(
#         db=db,
#         email=form_data.username,
#         password=form_data.password
#     )



# # Current User

# @router.get(
#     "/me",
#     response_model=UserResponse
# )
# def get_me(
#     current_user = Depends(get_current_user)
# ):

#     return current_user



# # Update Profile

# @router.put(
#     "/profile",
#     response_model=UserResponse
# )
# def update_profile(
#     user_data: UserUpdate,
#     db: Session = Depends(get_db),
#     current_user = Depends(get_current_user)
# ):

#     return UserService.update_profile(
#         db=db,
#         user_id=current_user.id,
#         user_data=user_data
#     )
# # -----------------------------
# # Change Password
# # -----------------------------

# @router.put(
#     "/change-password"
# )
# def change_password(
#     data: ChangePasswordRequest,
#     db: Session = Depends(get_db),
#     current_user = Depends(get_current_user)
# ):

#     UserService.change_password(
#         db=db,
#         user_id=current_user.id,
#         current_password=data.current_password,
#         new_password=data.new_password,
#     )


#     return {
#         "message": "Password updated successfully"
#     }
from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app.database.session import get_db

from app.auth.jwt_handler import get_current_user

from app.schemas.user import (
    UserCreate,
    UserLogin,
    UserResponse,
    UserUpdate,
    Token,
    ChangePasswordRequest,
)

from app.services.user_services import UserService


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


# =====================================
# Register
# =====================================

@router.post(
    "/register",
    response_model=UserResponse,
    status_code=201
)
def register(
    user: UserCreate,
    db: Session = Depends(get_db)
):

    return UserService.register(
        db=db,
        user=user
    )


# =====================================
# Login (Frontend JSON)
# =====================================

@router.post(
    "/login",
    response_model=Token
)
def login(
    user: UserLogin,
    db: Session = Depends(get_db)
):

    return UserService.login(
        db=db,
        email=user.email,
        password=user.password
    )


# =====================================
# Swagger OAuth2 Login
# =====================================

@router.post(
    "/token",
    response_model=Token
)
def login_for_swagger(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):

    return UserService.login(
        db=db,
        email=form_data.username,
        password=form_data.password
    )


# =====================================
# Get Current User
# =====================================

@router.get(
    "/me",
    response_model=UserResponse
)
def get_me(
    current_user = Depends(get_current_user)
):

    return current_user



# =====================================
# Update Profile
# =====================================

@router.put(
    "/profile",
    response_model=UserResponse
)
def update_profile(
    user_data: UserUpdate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    return UserService.update_profile(
        db=db,
        user_id=current_user.id,
        user_data=user_data
    )



# =====================================
# Change Password
# =====================================

@router.put(
    "/change-password"
)
def change_password(
    data: ChangePasswordRequest,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    UserService.change_password(
        db=db,
        user_id=current_user.id,
        current_password=data.current_password,
        new_password=data.new_password
    )


    return {
        "message": "Password updated successfully"
    }