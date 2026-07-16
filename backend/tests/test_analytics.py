def test_category_analytics(client, auth_headers):

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
            "title": "Dinner",
            "amount": 350,
            "category": "Food",
            "description": "Dinner",
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
        "/analytics/category",
        headers=auth_headers
    )

    assert response.status_code == 200

    data = response.json()

    assert isinstance(data, list)
    assert len(data) >= 1

    for item in data:
        assert "category" in item
        assert "total" in item


def test_monthly_analytics(client, auth_headers):

    client.post(
        "/expenses/",
        headers=auth_headers,
        json={
            "title": "Groceries",
            "amount": 500,
            "category": "Food",
            "description": "Monthly Shopping",
            "expense_date": "2026-07-16"
        }
    )

    response = client.get(
        "/analytics/monthly",
        headers=auth_headers
    )

    assert response.status_code == 200

    data = response.json()

    assert isinstance(data, list)
    assert len(data) >= 1

    for item in data:
        assert "month" in item
        assert "total" in item