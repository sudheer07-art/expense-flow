def test_dashboard_summary(client, auth_headers):

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
        "/dashboard/summary",
        headers=auth_headers
    )

    assert response.status_code == 200

    data = response.json()

    assert "total_expense" in data
    assert "total_transactions" in data
    assert "today_expense" in data
    assert "this_month_expense" in data

    assert data["total_transactions"] >= 2
    assert data["total_expense"] >= 400