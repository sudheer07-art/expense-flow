import uuid
def test_home(client):

    response = client.get("/")

    assert response.status_code == 200

    assert response.json() == {
        "message": "ExpenseFlow API Running 🚀"
    }
def test_register(client):
    email = f"test_{uuid.uuid4().hex[:8]}@example.com"

    response = client.post(
        "/auth/register",
        json={
            "name": "Test User",
            "email": email,
            "password": "password123"
        }
    )

    assert response.status_code == 201

    data = response.json()

    assert data["name"] == "Test User"
    assert data["email"] == email
def test_login(client):
    import uuid

    email = f"login_{uuid.uuid4().hex[:8]}@example.com"

    # Register user
    client.post(
        "/auth/register",
        json={
            "name": "Login User",
            "email": email,
            "password": "password123"
        }
    )

    # Login using FORM DATA
    response = client.post(
        "/auth/login",
        data={
            "username": email,
            "password": "password123"
        }
    )

    assert response.status_code == 200

    data = response.json()

    assert "access_token" in data
    assert data["token_type"] == "bearer"
def test_invalid_login(client):
    import uuid

    email = f"wrong_{uuid.uuid4().hex[:8]}@example.com"

    client.post(
        "/auth/register",
        json={
            "name": "Wrong Password User",
            "email": email,
            "password": "password123"
        }
    )

    response = client.post(
        "/auth/login",
        data={
            "username": email,
            "password": "wrongpassword"
        }
    )

    assert response.status_code == 401

    data = response.json()

    assert data["success"] is False
    assert data["message"] == "Invalid email or password"
def test_login_unknown_user(client):

    response = client.post(
        "/auth/login",
        data={
            "username": "nouser@example.com",
            "password": "password123"
        }
    )

    assert response.status_code == 401

    data = response.json()

    assert data["success"] is False
    assert data["message"] == "Invalid email or password"