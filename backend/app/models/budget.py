# from sqlalchemy import Column, Integer, Float, ForeignKey

# from app.database.base import Base


# class Budget(Base):
#     __tablename__ = "budgets"

#     id = Column(
#         Integer,
#         primary_key=True,
#         index=True
#     )

#     amount = Column(
#         Float,
#         nullable=False
#     )

#     month = Column(
#         Integer,
#         nullable=False
#     )

#     year = Column(
#         Integer,
#         nullable=False
#     )

#     user_id = Column(
#         Integer,
#         ForeignKey("users.id"),
#         nullable=False
#     )
from sqlalchemy import (
    Column,
    Integer,
    Float,
    ForeignKey,
    DateTime,
    UniqueConstraint,
)
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.database.database import Base


class Budget(Base):
    __tablename__ = "budgets"

    __table_args__ = (
        UniqueConstraint(
            "user_id",
            "month",
            "year",
            name="uq_budget_user_month_year",
        ),
    )

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    amount = Column(
        Float,
        nullable=False,
    )

    month = Column(
        Integer,
        nullable=False,
    )

    year = Column(
        Integer,
        nullable=False,
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )

    user = relationship(
        "User",
        back_populates="budgets",
    )