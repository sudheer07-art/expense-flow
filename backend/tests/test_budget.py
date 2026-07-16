def test_create_budget(client, auth_headers):

    response = client.post(
        "/budgets/",
        headers=auth_headers,
        json={
            "amount": 5000,
            "month": 7,
            "year": 2026
        }
    )

    assert response.status_code == 201

    data = response.json()

    assert data["amount"] == 5000
    assert data["month"] == 7
    assert data["year"] == 2026


def test_get_budgets(client, auth_headers):

    client.post(
        "/budgets/",
        headers=auth_headers,
        json={
            "amount": 3000,
            "month": 7,
            "year": 2026
        }
    )

    response = client.get(
        "/budgets/",
        headers=auth_headers
    )

    assert response.status_code == 200

    budgets = response.json()

    assert isinstance(budgets, list)
    assert len(budgets) >= 1


def test_update_budget(client, auth_headers):

    # Create Budget
    response = client.post(
        "/budgets/",
        headers=auth_headers,
        json={
            "amount": 2000,
            "month": 7,
            "year": 2026
        }
    )

    assert response.status_code == 201

    budget = response.json()

    # Update Budget
    response = client.put(
        f"/budgets/{budget['id']}",
        headers=auth_headers,
        json={
            "amount": 3500
        }
    )

    assert response.status_code == 200

    updated = response.json()

    assert updated["amount"] == 3500


def test_delete_budget(client, auth_headers):

    # Create Budget
    response = client.post(
        "/budgets/",
        headers=auth_headers,
        json={
            "amount": 1500,
            "month": 7,
            "year": 2026
        }
    )

    assert response.status_code == 201

    budget = response.json()

    # Delete Budget
    response = client.delete(
        f"/budgets/{budget['id']}",
        headers=auth_headers
    )

    assert response.status_code == 200

    data = response.json()

    assert data["message"] == "Budget deleted successfully"