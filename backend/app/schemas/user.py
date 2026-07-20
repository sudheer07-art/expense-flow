from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str



class UserResponse(BaseModel):
    id: int
    name: str
    email: EmailStr

    class Config:
        from_attributes = True



class UserLogin(BaseModel):
    email: EmailStr
    password: str



class UserUpdate(BaseModel):
    name: str
    email: EmailStr



class Token(BaseModel):
    access_token: str
    token_type: str
class UserUpdate(BaseModel):
    name: str
    email: EmailStr
class ChangePasswordRequest(BaseModel):

    current_password: str

    new_password: str