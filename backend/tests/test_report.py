def test_monthly_report(client, auth_headers):

    # Create expenses
    client.post(
        "/expenses/",
        headers=auth_headers,
        json={
            "title": "Lunch",
            "amount": 250,
            "category": "Food",
            "description": "Lunch",
            "expense_date": "2026-07-16"
        }
    )

    client.post(
        "/expenses/",
        headers=auth_headers,
        json={
            "title": "Taxi",
            "amount": 150,
            "category": "Travel",
            "description": "Cab",
            "expense_date": "2026-07-16"
        }
    )

    response = client.get(
        "/reports/monthly?month=7&year=2026",
        headers=auth_headers
    )

    assert response.status_code == 200

    data = response.json()

    assert data["month"] == 7
    assert data["year"] == 2026
    assert "total_expense" in data
    assert "total_transactions" in data
    assert "categories" in data


def test_yearly_report(client, auth_headers):

    client.post(
        "/expenses/",
        headers=auth_headers,
        json={
            "title": "Shopping",
            "amount": 500,
            "category": "Shopping",
            "description": "Mall",
            "expense_date": "2026-07-16"
        }
    )

    response = client.get(
        "/reports/yearly?year=2026",
        headers=auth_headers
    )

    assert response.status_code == 200

    data = response.json()

    assert data["year"] == 2026
    assert "total_expense" in data
    assert "total_transactions" in data
    assert "monthly_breakdown" in data
def test_monthly_pdf_export(client, auth_headers):

    response = client.get(
        "/reports/monthly/pdf?month=7&year=2026",
        headers=auth_headers
    )

    assert response.status_code == 200

    assert response.headers["content-type"] == "application/pdf"
def test_monthly_excel_export(client, auth_headers):

    response = client.get(
        "/reports/monthly/excel?month=7&year=2026",
        headers=auth_headers
    )

    assert response.status_code == 200

    assert (
        "spreadsheetml.sheet"
        in response.headers["content-type"]
    )
