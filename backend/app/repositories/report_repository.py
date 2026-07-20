from sqlalchemy import extract, func
from sqlalchemy.orm import Session

from app.models.expense import Expense


class ReportRepository:

    @staticmethod
    def get_total_expense(
        db: Session,
        user_id: int,
        month: int,
        year: int,
    ):

        total = (
            db.query(func.sum(Expense.amount))
            .filter(
                Expense.user_id == user_id,
                extract(
                    "month",
                    Expense.expense_date
                ) == month,
                extract(
                    "year",
                    Expense.expense_date
                ) == year,
            )
            .scalar()
        )

        return float(total or 0)


    @staticmethod
    def get_total_transactions(
        db: Session,
        user_id: int,
        month: int,
        year: int,
    ):

        return (
            db.query(Expense)
            .filter(
                Expense.user_id == user_id,
                extract(
                    "month",
                    Expense.expense_date
                ) == month,
                extract(
                    "year",
                    Expense.expense_date
                ) == year,
            )
            .count()
        )


    @staticmethod
    def get_category_summary(
        db: Session,
        user_id: int,
        month: int,
        year: int,
    ):

        return (
            db.query(
                Expense.category,
                func.sum(Expense.amount).label("total")
            )
            .filter(
                Expense.user_id == user_id,
                extract(
                    "month",
                    Expense.expense_date
                ) == month,
                extract(
                    "year",
                    Expense.expense_date
                ) == year,
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
    def get_year_total(
        db: Session,
        user_id: int,
        year: int,
    ):

        total = (
            db.query(func.sum(Expense.amount))
            .filter(
                Expense.user_id == user_id,
                extract(
                    "year",
                    Expense.expense_date
                ) == year,
            )
            .scalar()
        )

        return float(total or 0)



    @staticmethod
    def get_year_transaction_count(
        db: Session,
        user_id: int,
        year: int,
    ):

        return (
            db.query(Expense)
            .filter(
                Expense.user_id == user_id,
                extract(
                    "year",
                    Expense.expense_date
                ) == year,
            )
            .count()
        )



    @staticmethod
    def get_yearly_summary(
        db: Session,
        user_id: int,
        year: int,
    ):

        return (
            db.query(
                extract(
                    "month",
                    Expense.expense_date
                ).label("month"),

                func.sum(
                    Expense.amount
                ).label("total")
            )
            .filter(
                Expense.user_id == user_id,
                extract(
                    "year",
                    Expense.expense_date
                ) == year,
            )
            .group_by(
                extract(
                    "month",
                    Expense.expense_date
                )
            )
            .order_by(
                extract(
                    "month",
                    Expense.expense_date
                )
            )
            .all()
        )