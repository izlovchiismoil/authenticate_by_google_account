# Google OAuth2 Authentication with Node.js

This project demonstrates how to implement **Google Account Authentication** in a Node.js application using **Passport.js**, **Express**, and **Docker**.

## 🚀 Features

- Google OAuth 2.0 login
- Session-based authentication
- Express + Passport integration
- Docker support for easy deployment
- Secure `.env` configuration

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- Passport.js
- passport-google-oauth20
- express-session
- dotenv
- Docker & Docker Compose

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/google-auth-nodejs.git
cd google-auth-nodejs
```
### Create a .env file based on the example:
```bash
cp .env.example .env
```

### Then fill in your credentials:

- **GOOGLE_CLIENT_ID=your_google_client_id
- **GOOGLE_CLIENT_SECRET=your_google_client_secret
- **GOOGLE_CALLBACK_URL=your_google_callback_url
- **SESSION_SECRET=your_random_session_secret
- **PORT=your_app_port

- 🔐 To get the Google credentials, go to Google Developer Console, create a project, enable OAuth, and generate credentials.

- Make sure to add this URI to your list of Authorized redirect URIs:
- **http://localhost:3000/api/v1/auth/google/callback

---

### 🐳 Running with Docker

## 1. Build and start the app

```bash
docker compose up --build
```

## This will run the app on: http://localhost:3000

## 📁 Project Structure

.
├── Dockerfile
├── docker-compose.yml
├── server.js
├── package.json
├── .env.example
└── README.md
