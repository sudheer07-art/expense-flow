from sqlalchemy import extract
from sqlalchemy.orm import Session

from app.models.expense import Expense
from app.schemas.expense_filter import ExpenseFilter


class ExpenseRepository:

    @staticmethod
    def create(db: Session, expense: Expense):
        db.add(expense)
        db.commit()
        db.refresh(expense)
        return expense

    @staticmethod
    def get_all(
        db: Session,
        user_id: int,
        filters: ExpenseFilter
    ):

        query = (
            db.query(Expense)
            .filter(Expense.user_id == user_id)
        )

        # -----------------------------
        # Category Filter
        # -----------------------------
        if filters.category:
            query = query.filter(
                Expense.category == filters.category
            )

        # -----------------------------
        # Month Filter
        # -----------------------------
        if filters.month:
            query = query.filter(
                extract(
                    "month",
                    Expense.expense_date
                ) == filters.month
            )

        # -----------------------------
        # Year Filter
        # -----------------------------
        if filters.year:
            query = query.filter(
                extract(
                    "year",
                    Expense.expense_date
                ) == filters.year
            )

        # -----------------------------
        # Minimum Amount
        # -----------------------------
        if filters.min_amount is not None:
            query = query.filter(
                Expense.amount >= filters.min_amount
            )

        # -----------------------------
        # Maximum Amount
        # -----------------------------
        if filters.max_amount is not None:
            query = query.filter(
                Expense.amount <= filters.max_amount
            )

        # -----------------------------
        # Search by Title
        # -----------------------------
        if filters.search:
            query = query.filter(
                Expense.title.ilike(
                    f"%{filters.search}%"
                )
            )

        # -----------------------------
        # Pagination
        # -----------------------------
        offset = (
            filters.page - 1
        ) * filters.size

        query = (
            query
            .offset(offset)
            .limit(filters.size)
        )

        return query.all()

    @staticmethod
    def get_by_id(
        db: Session,
        expense_id: int,
        user_id: int
    ):
        return (
            db.query(Expense)
            .filter(
                Expense.id == expense_id,
                Expense.user_id == user_id
            )
            .first()
        )

    @staticmethod
    def update(db: Session):
        db.commit()

    @staticmethod
    def delete(
        db: Session,
        expense: Expense
    ):
        db.delete(expense)
        db.commit()