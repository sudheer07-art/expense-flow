# from fastapi import HTTPException
# from sqlalchemy.orm import Session

# from app.models.budget import Budget
# from app.repositories.budget_repository import BudgetRepository
# from app.schemas.budget import BudgetCreate, BudgetUpdate


# class BudgetService:

#     @staticmethod
#     def create_budget(
#         db: Session,
#         budget_data: BudgetCreate,
#         user_id: int
#     ):

#         existing_budget = BudgetRepository.get_by_user_month_year(
#             db=db,
#             user_id=user_id,
#             month=budget_data.month,
#             year=budget_data.year
#         )

#         if existing_budget:
#             raise HTTPException(
#                 status_code=400,
#                 detail="Budget already exists for this month and year"
#             )

#         budget = Budget(
#             amount=budget_data.amount,
#             month=budget_data.month,
#             year=budget_data.year,
#             user_id=user_id
#         )

#         return BudgetRepository.create(
#             db,
#             budget
#         )

#     @staticmethod
#     def get_budgets(
#         db: Session,
#         user_id: int
#     ):
#         return BudgetRepository.get_all(
#             db,
#             user_id
#         )

#     @staticmethod
#     def update_budget(
#         db: Session,
#         budget_id: int,
#         budget_data: BudgetUpdate,
#         user_id: int
#     ):

#         budget = BudgetRepository.get_by_id(
#             db,
#             budget_id,
#             user_id
#         )

#         if not budget:
#             raise HTTPException(
#                 status_code=404,
#                 detail="Budget not found"
#             )

#         budget.amount = budget_data.amount

#         BudgetRepository.update(db)

#         return budget

#     @staticmethod
#     def delete_budget(
#         db: Session,
#         budget_id: int,
#         user_id: int
#     ):

#         budget = BudgetRepository.get_by_id(
#             db,
#             budget_id,
#             user_id
#         )

#         if not budget:
#             raise HTTPException(
#                 status_code=404,
#                 detail="Budget not found"
#             )

#         BudgetRepository.delete(
#             db,
#             budget
#         )

#         return {
#             "message": "Budget deleted successfully"
#         }
from datetime import datetime

from fastapi import HTTPException
from sqlalchemy import extract, func
from sqlalchemy.orm import Session

from app.models.budget import Budget
from app.models.expense import Expense

from app.repositories.budget_repository import BudgetRepository

from app.schemas.budget import (
    BudgetCreate,
    BudgetUpdate,
)


class BudgetService:

    @staticmethod
    def create_budget(
        db: Session,
        budget_data: BudgetCreate,
        user_id: int,
    ):
        existing_budget = BudgetRepository.get_by_user_month_year(
            db=db,
            user_id=user_id,
            month=budget_data.month,
            year=budget_data.year,
        )

        if existing_budget:
            raise HTTPException(
                status_code=400,
                detail="Budget already exists for this month.",
            )

        budget = Budget(
            amount=budget_data.amount,
            month=budget_data.month,
            year=budget_data.year,
            user_id=user_id,
        )

        return BudgetRepository.create(
            db=db,
            budget=budget,
        )

    @staticmethod
    def get_budgets(
        db: Session,
        user_id: int,
    ):
        return BudgetRepository.get_all(
            db=db,
            user_id=user_id,
        )

    @staticmethod
    def get_budget_by_id(
        db: Session,
        budget_id: int,
        user_id: int,
    ):
        budget = BudgetRepository.get_by_id(
            db=db,
            budget_id=budget_id,
            user_id=user_id,
        )

        if not budget:
            raise HTTPException(
                status_code=404,
                detail="Budget not found.",
            )

        return budget

    @staticmethod
    def get_current_budget(
        db: Session,
        user_id: int,
    ):
        budget = BudgetRepository.get_current_month_budget(
            db=db,
            user_id=user_id,
        )

        today = datetime.today()

        spent = (
            db.query(
                func.coalesce(
                    func.sum(Expense.amount),
                    0,
                )
            )
            .filter(
                Expense.user_id == user_id,
                extract("month", Expense.expense_date) == today.month,
                extract("year", Expense.expense_date) == today.year,
            )
            .scalar()
        )

        if budget is None:
            return {
                "budget_id": None,
                "amount": 0,
                "spent": float(spent),
                "remaining": 0,
                "used_percentage": 0,
                "status": "No Budget",
                "month": today.month,
                "year": today.year,
            }

        remaining = budget.amount - spent

        percentage = (
            (spent / budget.amount) * 100
            if budget.amount > 0
            else 0
        )

        if percentage < 60:
            status = "Excellent"
        elif percentage < 80:
            status = "Good"
        elif percentage <= 100:
            status = "Warning"
        else:
            status = "Exceeded"

        return {
            "budget_id": budget.id,
            "amount": budget.amount,
            "spent": round(float(spent), 2),
            "remaining": round(float(remaining), 2),
            "used_percentage": round(float(percentage), 2),
            "status": status,
            "month": budget.month,
            "year": budget.year,
        }

    @staticmethod
    def update_budget(
        db: Session,
        budget_id: int,
        budget_data: BudgetUpdate,
        user_id: int,
    ):
        budget = BudgetRepository.get_by_id(
            db=db,
            budget_id=budget_id,
            user_id=user_id,
        )

        if not budget:
            raise HTTPException(
                status_code=404,
                detail="Budget not found.",
            )

        budget.amount = budget_data.amount

        return BudgetRepository.update(
            db=db,
            budget=budget,
        )

    @staticmethod
    def delete_budget(
        db: Session,
        budget_id: int,
        user_id: int,
    ):
        budget = BudgetRepository.get_by_id(
            db=db,
            budget_id=budget_id,
            user_id=user_id,
        )

        if not budget:
            raise HTTPException(
                status_code=404,
                detail="Budget not found.",
            )

        BudgetRepository.delete(
            db=db,
            budget=budget,
        )

        return {
            "message": "Budget deleted successfully."
        }