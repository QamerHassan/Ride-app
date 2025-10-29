# 🚗 Ride App

An AI-driven ride booking and management platform built using **Next.js (frontend)** and **Django REST Framework (backend)**. The app allows users to **book rides**, **track drivers in real-time**, and **manage ride history**, while drivers can **accept, start, and complete rides** efficiently.

---

## 🌟 Features

### 🚘 User Features
- User registration & login with JWT authentication
- Book a ride by entering pickup and destination
- View available drivers nearby
- Live ride status tracking
- View ride history
- Logout functionality

### 🚖 Driver Features
- Driver login & dashboard
- View assigned rides
- Accept and confirm rides
- Mark rides as completed
- View ride history

### ⚙️ Admin Features
- Manage users and drivers
- Monitor rides and statuses
- Handle ride history and analytics (optional future feature)

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | Next.js 16 (App Router), React, Tailwind CSS |
| **Backend** | Django, Django REST Framework |
| **Database** | PostgreSQL |
| **Authentication** | JWT (JSON Web Tokens) |
| **Maps & Location** | Google Maps API (for live map display & coordinates) |
| **Real-time** | WebSockets (for live updates) |
| **Deployment** | Docker (optional) |

---

## 🗂️ Project Structure

### Frontend (`/RidingApp`)
