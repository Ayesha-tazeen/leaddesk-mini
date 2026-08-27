# LeadDesk Mini

A production-ready, full-stack lead management SaaS application built for the Digital Heroes training task.

## Features

- **Modern Landing Page**: Beautiful, responsive SaaS landing page built with Tailwind CSS.
- **Lead Capture Form**: Client and server-side validation for seamless lead submission.
- **Admin Dashboard**: Secure protected routes using JWT authentication.
- **Lead Management**: View, search, and update the status of leads (New, Contacted, Closed).
- **Secure Authentication**: Passwords hashed with bcrypt, state managed via React Context and Axios interceptors.

## Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas through Mongoose
- **Authentication**: JWT (JSON Web Tokens) + bcrypt

## Folder Structure

```
leaddesk-mini/
├── frontend/                        # Vite + React + Tailwind
│   ├── public/
│   ├── src/
│   │   ├── api/                     # Axios instance & API calls
│   │   ├── components/              # Reusable UI components
│   │   ├── context/                 # AuthContext
│   │   ├── pages/                   # Views (Landing, Login, Dashboard)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── (config files...)
│
├── backend/                         # Node.js + Express + MongoDB
│   ├── config/                      # Database connection
│   ├── controllers/                 # Route logic
│   ├── middleware/                  # Auth and error handling
│   ├── models/                      # Mongoose schemas (User, Lead)
│   ├── routes/                      # API endpoints
│   ├── scripts/                     # seedAdmin.js
│   ├── server.js                    # Entry point
│   └── package.json
│
└── README.md
```

## Installation & Setup

### 1. Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   npm install
   ```
2. Create a `.env` file based on `.env.example`:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/leaddesk
   JWT_SECRET=your_super_secret_jwt_key_here
   JWT_EXPIRES_IN=7d
   ADMIN_EMAIL=admin@leaddesk.com
   ADMIN_PASSWORD=Admin@1234
   FRONTEND_URL=http://localhost:5173
   ```
3. Seed the admin user (run this **once**):
   ```bash
   npm run seed
   ```
4. Start the backend development server:
   ```bash
   npm run dev
   ```

### 2. Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   npm install
   ```
2. Create a `.env` file:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Deployment

### Backend (Render)
1. Push your code to GitHub.
2. Connect the repository to Render as a "Web Service".
3. Set the root directory to `backend`.
4. Build command: `npm install`
5. Start command: `npm start`
6. Add all the environment variables from your `.env` file into the Render dashboard.

### Frontend (Vercel)
1. Import the repository in Vercel.
2. Set the Framework Preset to "Vite".
3. Set the Root Directory to `frontend`.
4. Add the `VITE_API_URL` environment variable pointing to your deployed Render backend URL (e.g., `https://your-backend.onrender.com/api`).
5. Deploy.

### MongoDB Atlas
Make sure your MongoDB Atlas Network Access (IP Whitelist) is set to `0.0.0.0/0` (Allow access from anywhere) so Render can connect to it.

## API Routes

| Method | Endpoint | Auth Required | Description |
|--------|----------|---------------|-------------|
| POST | `/api/auth/login` | No | Authenticate admin and receive JWT |
| POST | `/api/leads` | No | Submit a new lead via landing page form |
| GET | `/api/leads` | Yes (Admin) | Get all leads (supports `?search=` query) |
| PATCH | `/api/leads/:id` | Yes (Admin) | Update a specific lead's status |

## Test Credentials

If you seeded the database using the default `.env.example` values:
- **Email**: `admin@leaddesk.com`
- **Password**: `Admin@1234`




# Live Demo

Landing Page
```
https://leaddesk-mini-three.vercel.app/
```

Admin

```
https://leaddesk-mini-three.vercel.app/admin
```

Backend

```
https://leaddesk-mini-wf0x.onrender.com
```

---

# GitHub Repository

https://github.com/Ayesha-tazeen/leaddesk-mini

---

# Built For

Built for **Digital Heroes Training Task**

https://digitalheroesco.com