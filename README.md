# 📚 MERN LMS — Full-Stack Learning Management System

A **full-stack Learning Management System (LMS)** built using the **MERN stack** (MongoDB, Express.js, React, Node.js) with **Clerk authentication** and **Stripe payment integration**.

---

## 🚀 Features

### 👩‍🏫 Educators
- Upload and manage courses (title, description, media, price)
- Track enrollments and earnings

### 👨‍🎓 Students
- Browse and search courses
- Register & login securely
- Purchase courses via Stripe
- View enrolled courses

### 🔐 Authentication
- Secure sign-in/sign-up powered by **Clerk**

### 💳 Payments
- Secure payment handling via **Stripe**

---

## 🛠 Tech Stack
- **Frontend**: React, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas or local)
- **Authentication**: Clerk
- **Payments**: Stripe
- **Deployment**: Vercel (frontend), Render (backend), MongoDB Atlas

---

## 📋 Prerequisites
Before you begin, make sure you have:
- Node.js (latest LTS recommended)
- MongoDB Atlas account or local MongoDB setup
- Clerk account (for authentication)
- Stripe account (for payment processing)

---

## ⚡ Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/mern-lms.git
cd mern-lms
2️⃣ Backend Setup
bash
Copy code
cd backend
cp .env.example .env
Update .env:

env
Copy code
MONGODB_URI=your_mongodb_uri
CLERK_API_KEY=your_clerk_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=your_jwt_secret
Install dependencies and start backend:

bash
Copy code
npm install
npm run dev
3️⃣ Frontend Setup
bash
Copy code
cd ../frontend
cp .env.example .env
Update .env:

env
Copy code
REACT_APP_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
REACT_APP_BACKEND_URL=http://localhost:5000
Install dependencies and start frontend:

bash
Copy code
npm install
npm start
4️⃣ Access the App
Frontend → http://localhost:3000

Backend API → http://localhost:5000

📂 Project Structure
pgsql
Copy code
mern-lms/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── index.js
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   ├── .env.example
│   └── package.json
└── README.md
📜 Scripts
Backend
bash
Copy code
npm run server      # Run tests (if implemented)
Frontend
bash
npm start     # Start frontend in development mode
npm run build # Build frontend for production