def test_create_expense(client, auth_headers):

    response = client.post(
        "/expenses/",
        headers=auth_headers,
        json={
            "title": "Lunch",
            "amount": 250,
            "category": "Food",
            "description": "Lunch with friends",
            "expense_date": "2026-07-16"
        }
    )

    assert response.status_code == 201

    data = response.json()

    assert data["title"] == "Lunch"
    assert data["amount"] == 250
    assert data["category"] == "Food"
def test_get_expenses(client, auth_headers):

    # Create first expense
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

    # Create second expense
    client.post(
        "/expenses/",
        headers=auth_headers,
        json={
            "title": "Taxi",
            "amount": 150,
            "category": "Travel",
            "description": "Cab Ride",
            "expense_date": "2026-07-16"
        }
    )

    response = client.get(
        "/expenses/",
        headers=auth_headers
    )

    assert response.status_code == 200

    data = response.json()

    assert isinstance(data, list)
    assert len(data) >= 2
def test_update_expense(client, auth_headers):

    response = client.post(
        "/expenses/",
        headers=auth_headers,
        json={
            "title": "Coffee",
            "amount": 100,
            "category": "Food",
            "description": "Morning Coffee",
            "expense_date": "2026-07-16"
        }
    )

    expense = response.json()

    expense_id = expense["id"]

    response = client.put(
        f"/expenses/{expense_id}",
        headers=auth_headers,
        json={
            "title": "Updated Coffee",
            "amount": 150,
            "category": "Food",
            "description": "Updated",
            "expense_date": "2026-07-16"
        }
    )

    assert response.status_code == 200

    updated = response.json()

    assert updated["title"] == "Updated Coffee"
    assert updated["amount"] == 150
def test_delete_expense(client, auth_headers):

    response = client.post(
        "/expenses/",
        headers=auth_headers,
        json={
            "title": "Delete Me",
            "amount": 300,
            "category": "Food",
            "description": "Delete Test",
            "expense_date": "2026-07-16"
        }
    )

    expense_id = response.json()["id"]

    response = client.delete(
        f"/expenses/{expense_id}",
        headers=auth_headers
    )

    assert response.status_code == 200

    data = response.json()

    assert data["message"] == "Expense deleted successfully"