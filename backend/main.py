from fastapi import FastAPI
from pydantic import BaseModel, EmailStr
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    first_name: str
    last_name: Optional[str] = None  # Properly optional with None
    email: EmailStr
    message: str

@app.get("/")
def home():
    return {"message": "Backend is Running!"}

@app.post("/api/contact")
async def handle_form(data: ContactForm):
    # Backend console me print karega
    print(f"Received - Name: {data.first_name} {data.last_name or ''}")
    print(f"Email: {data.email}")
    print(f"Message: {data.message}")
    return {"status": "success", "message": f"Inquiry received for {data.first_name}!"}