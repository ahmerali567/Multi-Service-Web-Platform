from fastapi import FastAPI
from pydantic import BaseModel, EmailStr
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
import smtplib
from email.mime.text import MIMEText

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
@app.post("/api/contact")
async def handle_form(data: ContactForm):
    # 1. Terminal par print karega (Jaise pehle karta tha)
    print(f"Received inquiry from: {data.first_name}")

    # 2. SMTP Settings (Hostinger Details)
    SMTP_SERVER = "smtp.hostinger.com"
    SMTP_PORT = 465
    SMTP_USER = "info@netwavesolution.com"
    SMTP_PASSWORD = Theq*****.5*** 

    # 3. Email Content tayyar karein
    email_body = f"Naya message mila hai:\n\nName: {data.first_name} {data.last_name or ''}\nEmail: {data.email}\nMessage: {data.message}"
    msg = MIMEText(email_body)
    msg['Subject'] = f"Netwave Inquiry: {data.first_name}"
    msg['From'] = SMTP_USER
    msg['To'] = "ahmer@gmail.com" # Jahan aap email receive karna chahte hain

    # 4. Email bhejne ki koshish karein
    try:
        with smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT) as server:
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.send_message(msg)
        return {"status": "success", "message": "Email sent successfully!"}
    except Exception as e:
        print(f"Email Error: {e}")
        return {"status": "error", "message": "Could not send email, but logged to terminal."}
