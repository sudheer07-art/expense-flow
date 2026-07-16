from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models.expense import Expense


class AnalyticsRepository:

    @staticmethod
    def get_category_summary(
        db: Session,
        user_id: int
    ):
        return (
            db.query(
                Expense.category,
                func.sum(Expense.amount).label("total")
            )
            .filter(
                Expense.user_id == user_id
            )
            .group_by(
                Expense.category
            )
            .order_by(
                func.sum(Expense.amount).desc()
            )
            .all()
        )

    @staticmethod
    def get_monthly_summary(
        db: Session,
        user_id: int
    ):
        return (
            db.query(
                func.extract(
                    "month",
                    Expense.expense_date
                ).label("month"),
                func.sum(
                    Expense.amount
                ).label("total")
            )
            .filter(
                Expense.user_id == user_id
            )
            .group_by(
                func.extract(
                    "month",
                    Expense.expense_date
                )
            )
            .order_by(
                func.extract(
                    "month",
                    Expense.expense_date
                )
            )
            .all()
        )