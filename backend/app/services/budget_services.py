from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.budget import Budget
from app.repositories.budget_repository import BudgetRepository
from app.schemas.budget import BudgetCreate, BudgetUpdate


class BudgetService:

    @staticmethod
    def create_budget(
        db: Session,
        budget_data: BudgetCreate,
        user_id: int
    ):

        existing_budget = BudgetRepository.get_by_user_month_year(
            db=db,
            user_id=user_id,
            month=budget_data.month,
            year=budget_data.year
        )

        if existing_budget:
            raise HTTPException(
                status_code=400,
                detail="Budget already exists for this month and year"
            )

        budget = Budget(
            amount=budget_data.amount,
            month=budget_data.month,
            year=budget_data.year,
            user_id=user_id
        )

        return BudgetRepository.create(
            db,
            budget
        )

    @staticmethod
    def get_budgets(
        db: Session,
        user_id: int
    ):
        return BudgetRepository.get_all(
            db,
            user_id
        )

    @staticmethod
    def update_budget(
        db: Session,
        budget_id: int,
        budget_data: BudgetUpdate,
        user_id: int
    ):

        budget = BudgetRepository.get_by_id(
            db,
            budget_id,
            user_id
        )

        if not budget:
            raise HTTPException(
                status_code=404,
                detail="Budget not found"
            )

        budget.amount = budget_data.amount

        BudgetRepository.update(db)

        return budget

    @staticmethod
    def delete_budget(
        db: Session,
        budget_id: int,
        user_id: int
    ):

        budget = BudgetRepository.get_by_id(
            db,
            budget_id,
            user_id
        )

        if not budget:
            raise HTTPException(
                status_code=404,
                detail="Budget not found"
            )

        BudgetRepository.delete(
            db,
            budget
        )

        return {
            "message": "Budget deleted successfully"
        }