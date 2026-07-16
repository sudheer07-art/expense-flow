from app.database.database import Base

# Import all models so Alembic can discover them

from app.models.user import User
from app.models.expense import Expense
from app.models.budget import Budget