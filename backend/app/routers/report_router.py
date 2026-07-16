from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from app.auth.jwt_handler import get_current_user
from app.database.session import get_db

from app.schemas.report import MonthlyReportResponse
from app.schemas.report import YearlyReportResponse
from app.services.report_service import ReportService
from fastapi.responses import StreamingResponse
from datetime import datetime
router = APIRouter(
    prefix="/reports",
    tags=["Reports"]
)


@router.get(
    "/monthly",
    response_model=MonthlyReportResponse
)
def get_monthly_report(
    month: int = Query(..., ge=1, le=12),
    year: int = Query(..., ge=2000),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    return ReportService.get_monthly_report(
        db=db,
        user_id=current_user.id,
        month=month,
        year=year
    )
@router.get(
    "/yearly",
    response_model=YearlyReportResponse
)
def get_yearly_report(
    year: int = Query(..., ge=2000),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    return ReportService.get_yearly_report(
        db=db,
        user_id=current_user.id,
        year=year
    )
@router.get("/monthly/pdf")
def download_monthly_pdf(
    month: int = Query(..., ge=1, le=12),
    year: int = Query(..., ge=2000),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    pdf = ReportService.generate_monthly_pdf(
        db=db,
        user_id=current_user.id,
        month=month,
        year=year
    )

    filename = (
        f"expense_report_{month}_{year}.pdf"
    )

    return StreamingResponse(
        pdf,
        media_type="application/pdf",
        headers={
            "Content-Disposition":
            f'attachment; filename="{filename}"'
        }
    )
@router.get("/monthly/excel")
def download_monthly_excel(
    month: int = Query(..., ge=1, le=12),
    year: int = Query(..., ge=2000),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    excel = ReportService.generate_monthly_excel(
        db=db,
        user_id=current_user.id,
        month=month,
        year=year
    )

    filename = (
        f"expense_report_{month}_{year}.xlsx"
    )

    return StreamingResponse(
        excel,
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers={
            "Content-Disposition":
            f'attachment; filename="{filename}"'
        }
    )