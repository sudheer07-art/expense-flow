from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.expense import Expense
from app.repositories.expense_repository import ExpenseRepository
from app.schemas.expense import ExpenseCreate, ExpenseUpdate
from app.schemas.expense_filter import ExpenseFilter


class ExpenseService:

    @staticmethod
    def create_expense(
        db: Session,
        expense_data: ExpenseCreate,
        user_id: int
    ):
        expense = Expense(
            title=expense_data.title,
            amount=expense_data.amount,
            category=expense_data.category,
            description=expense_data.description,
            expense_date=expense_data.expense_date,
            user_id=user_id
        )

        return ExpenseRepository.create(
            db,
            expense
        )

    @staticmethod
    def get_expenses(
        db: Session,
        user_id: int,
        filters: ExpenseFilter
    ):
        return ExpenseRepository.get_all(
            db=db,
            user_id=user_id,
            filters=filters
        )

    @staticmethod
    def get_expense(
        db: Session,
        expense_id: int,
        user_id: int
    ):

        expense = ExpenseRepository.get_by_id(
            db,
            expense_id,
            user_id
        )

        if not expense:
            raise HTTPException(
                status_code=404,
                detail="Expense not found"
            )

        return expense

    @staticmethod
    def update_expense(
        db: Session,
        expense_id: int,
        expense_data: ExpenseUpdate,
        user_id: int
    ):

        expense = ExpenseRepository.get_by_id(
            db,
            expense_id,
            user_id
        )

        if not expense:
            raise HTTPException(
                status_code=404,
                detail="Expense not found"
            )

        expense.title = expense_data.title
        expense.amount = expense_data.amount
        expense.category = expense_data.category
        expense.description = expense_data.description
        expense.expense_date = expense_data.expense_date

        ExpenseRepository.update(db)

        return expense

    @staticmethod
    def delete_expense(
        db: Session,
        expense_id: int,
        user_id: int
    ):

        expense = ExpenseRepository.get_by_id(
            db,
            expense_id,
            user_id
        )

        if not expense:
            raise HTTPException(
                status_code=404,
                detail="Expense not found"
            )

        ExpenseRepository.delete(
            db,
            expense
        )

        return {
            "message": "Expense deleted successfully"
        }