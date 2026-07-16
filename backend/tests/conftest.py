import uuid

import pytest
from fastapi.testclient import TestClient

from app.main import app


@pytest.fixture
def client():
    with TestClient(app) as client:
        yield client


@pytest.fixture
def auth_headers(client):
    email = f"test_{uuid.uuid4().hex[:8]}@example.com"

    # Register
    client.post(
        "/auth/register",
        json={
            "name": "Test User",
            "email": email,
            "password": "password123"
        }
    )

    # Login
    response = client.post(
        "/auth/login",
        data={
            "username": email,
            "password": "password123"
        }
    )

    token = response.json()["access_token"]

    return {
        "Authorization": f"Bearer {token}"
    }