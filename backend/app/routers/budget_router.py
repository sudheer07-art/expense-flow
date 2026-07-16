from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.auth.jwt_handler import get_current_user
from app.database.session import get_db

from app.schemas.budget import (
    BudgetCreate,
    BudgetUpdate,
    BudgetResponse
)

from app.services.budget_services import BudgetService

router = APIRouter(
    prefix="/budgets",
    tags=["Budgets"]
)


# -----------------------------
# Create Budget
# -----------------------------
@router.post(
    "/",
    response_model=BudgetResponse,
    status_code=201
)
def create_budget(
    budget: BudgetCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    return BudgetService.create_budget(
        db=db,
        budget_data=budget,
        user_id=current_user.id
    )


# -----------------------------
# Get All Budgets
# -----------------------------
@router.get(
    "/",
    response_model=list[BudgetResponse]
)
def get_budgets(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    return BudgetService.get_budgets(
        db=db,
        user_id=current_user.id
    )


# -----------------------------
# Update Budget
# -----------------------------
@router.put(
    "/{budget_id}",
    response_model=BudgetResponse
)
def update_budget(
    budget_id: int,
    budget: BudgetUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    return BudgetService.update_budget(
        db=db,
        budget_id=budget_id,
        budget_data=budget,
        user_id=current_user.id
    )


# -----------------------------
# Delete Budget
# -----------------------------
@router.delete("/{budget_id}")
def delete_budget(
    budget_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    return BudgetService.delete_budget(
        db=db,
        budget_id=budget_id,
        user_id=current_user.id
    )