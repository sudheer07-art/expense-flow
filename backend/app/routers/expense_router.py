from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from app.auth.jwt_handler import get_current_user
from app.database.session import get_db

from app.schemas.expense import (
    ExpenseCreate,
    ExpenseUpdate,
    ExpenseResponse,
)
from app.schemas.expense_filter import ExpenseFilter

from app.services.expense_service import ExpenseService

router = APIRouter(
    prefix="/expenses",
    tags=["Expenses"]
)


# -----------------------------
# Create Expense
# -----------------------------
@router.post(
    "/",
    response_model=ExpenseResponse,
    status_code=201
)
def create_expense(
    expense: ExpenseCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    return ExpenseService.create_expense(
        db=db,
        expense_data=expense,
        user_id=current_user.id
    )


# -----------------------------
# Get Expenses
# -----------------------------
@router.get(
    "/",
    response_model=list[ExpenseResponse]
)
def get_expenses(
    category: str | None = Query(None),
    month: int | None = Query(None),
    year: int | None = Query(None),
    min_amount: float | None = Query(None),
    max_amount: float | None = Query(None),
    search: str | None = Query(None),
    page: int = Query(1, ge=1),
    size: int = Query(10, ge=1, le=100),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    filters = ExpenseFilter(
        category=category,
        month=month,
        year=year,
        min_amount=min_amount,
        max_amount=max_amount,
        search=search,
        page=page,
        size=size,
    )

    return ExpenseService.get_expenses(
        db=db,
        user_id=current_user.id,
        filters=filters
    )


# -----------------------------
# Get Expense By ID
# -----------------------------
@router.get(
    "/{expense_id}",
    response_model=ExpenseResponse
)
def get_expense(
    expense_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    return ExpenseService.get_expense(
        db=db,
        expense_id=expense_id,
        user_id=current_user.id
    )


# -----------------------------
# Update Expense
# -----------------------------
@router.put(
    "/{expense_id}",
    response_model=ExpenseResponse
)
def update_expense(
    expense_id: int,
    expense: ExpenseUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    return ExpenseService.update_expense(
        db=db,
        expense_id=expense_id,
        expense_data=expense,
        user_id=current_user.id
    )


# -----------------------------
# Delete Expense
# -----------------------------
@router.delete("/{expense_id}")
def delete_expense(
    expense_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    return ExpenseService.delete_expense(
        db=db,
        expense_id=expense_id,
        user_id=current_user.id
    )