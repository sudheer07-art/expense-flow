from fastapi import FastAPI
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException
from fastapi.middleware.cors import CORSMiddleware


from app.exceptions.handlers import (
    validation_exception_handler,
    http_exception_handler,
    generic_exception_handler,
)


from app.database.database import engine
from app.database.base import Base


# IMPORTANT: Load ALL models first

from app.models import User, Expense, Budget

# Create tables after models are loaded
Base.metadata.create_all(bind=engine)



from app.routers.auth_router import router as auth_router
from app.routers.expense_router import router as expense_router
from app.routers.dashboard_router import router as dashboard_router
from app.routers.analytics_router import router as analytics_router
from app.routers.budget_router import router as budget_router
from app.routers.report_router import router as report_router
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="ExpenseFlow API",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
   allow_origins=[
    "http://localhost:5173",
    "https://expense-flow-d0kfkvtm7-axonix-copilot.vercel.app"
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_exception_handler(
    RequestValidationError,
    validation_exception_handler
)

app.add_exception_handler(
    StarletteHTTPException,
    http_exception_handler
)

app.add_exception_handler(
    Exception,
    generic_exception_handler
)

app.include_router(auth_router)
app.include_router(expense_router)
app.include_router(dashboard_router)
app.include_router(analytics_router)
app.include_router(budget_router)
app.include_router(report_router)


@app.get("/")
def home():
    return {
        "message": "ExpenseFlow API Running 🚀"
    }