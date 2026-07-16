from datetime import date

from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models.expense import Expense


class DashboardRepository:

    @staticmethod
    def get_total_expense(
        db: Session,
        user_id: int
    ):
        return (
            db.query(
                func.coalesce(func.sum(Expense.amount), 0)
            )
            .filter(
                Expense.user_id == user_id
            )
            .scalar()
        )

    @staticmethod
    def get_total_transactions(
        db: Session,
        user_id: int
    ):
        return (
            db.query(Expense)
            .filter(
                Expense.user_id == user_id
            )
            .count()
        )

    @staticmethod
    def get_today_expense(
        db: Session,
        user_id: int
    ):
        return (
            db.query(
                func.coalesce(func.sum(Expense.amount), 0)
            )
            .filter(
                Expense.user_id == user_id,
                Expense.expense_date == date.today()
            )
            .scalar()
        )

    @staticmethod
    def get_this_month_expense(
        db: Session,
        user_id: int
    ):
        today = date.today()

        return (
            db.query(
                func.coalesce(func.sum(Expense.amount), 0)
            )
            .filter(
                Expense.user_id == user_id,
                func.extract(
                    "month",
                    Expense.expense_date
                ) == today.month,
                func.extract(
                    "year",
                    Expense.expense_date
                ) == today.year
            )
            .scalar()
        )