 # 📈 Full Stack Stock Trading Platform

A full-stack stock trading platform built using the MERN stack. The project includes a React-based frontend for user authentication, a trading dashboard for managing stocks and orders, and a Node.js/Express backend connected to MongoDB.

## 🚀 Live Demo

| Application | Live Link |
|------------|-----------|
| 🌐 Frontend | [Visit Frontend](https://inquisitive-tulumba-262ab6.netlify.app/) |
| 📊 Dashboard | [Visit Dashboard](https://vermillion-zabaione-2aef87.netlify.app/) |
| ⚙️ Backend API | [Backend API](https://full-stack-stock-trading-platform-3wak.onrender.com/) |

---

## 📌 Features

- User registration and login
- Token-based authentication
- Trading dashboard
- View stock holdings
- View positions
- View orders
- Buy stocks
- Sell stocks
- Portfolio management
- Stock charts and statistics
- REST API integration
- MongoDB database integration

---

## 🏗️ Application Architecture

```text
                  ┌──────────────┐
                  │     User     │
                  └──────┬───────┘
                         │
                         ▼
                ┌─────────────────┐
                │    Frontend     │
                │     React       │
                └────────┬────────┘
                         │
                    API Requests
                         │
                         ▼
                ┌─────────────────┐
                │     Backend     │
                │ Node.js/Express │
                └────────┬────────┘
                         │
                         ▼
                ┌─────────────────┐
                │     MongoDB     │
                └─────────────────┘
                         ▲
                         │
                    API Requests
                         │
                ┌────────┴────────┐
                │    Dashboard    │
                │      React      │
                └─────────────────┘
```

The **Frontend** handles user registration and login.

The **Backend** handles authentication, database operations, holdings, orders, and trading-related requests.

The **Dashboard** communicates with the backend to display and manage trading data.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML
- CSS
- Bootstrap
- Axios

### Dashboard
- React.js
- JavaScript
- HTML
- CSS
- Bootstrap
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- REST API

### Deployment
- Netlify
- Render

---

## 📂 Project Structure

```text
Full-Stack-Stock-Trading-Platform/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── schemas/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   └── landing_page/
│   └── package.json
│
├── dashboard/
│   ├── public/
│   ├── src/
│   │   └── components/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

# 💻 Run Locally

## 1. Clone the Repository

```bash
git clone https://github.com/mayankv14/Full-Stack-Stock-Trading-Platform.git
cd Full-Stack-Stock-Trading-Platform
```

## 2. Start the Backend

Open a terminal:

```bash
cd backend
npm install
npm start
```

Backend:

```text
http://localhost:3002
```

## 3. Start the Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

## 4. Start the Dashboard

Open another terminal:

```bash
cd dashboard
npm install
npm start
```

The frontend, dashboard, and backend run as separate applications and communicate through API requests.

---

## 🔐 Authentication

The application uses token-based authentication.

After login, the authentication token is used for protected backend requests.

Example:

```text
Authorization: Bearer <token>
```

---

## 🔄 API Communication

The frontend and dashboard communicate with the backend using REST API requests.

Some of the implemented endpoints include:

```text
POST  /signup
POST  /login
GET   /allHoldings
POST  /newOrder
```

The backend processes these requests and communicates with MongoDB for storing and retrieving data.

---

## 🌐 Deployment

The project is deployed using:

- **Frontend:** Netlify
- **Dashboard:** Netlify
- **Backend:** Render
- **Database:** MongoDB

---

## 👨‍💻 Author

**Mayank Vishwakarma**

GitHub: [@mayankv14](https://github.com/mayankv14)

---

⭐ If you found this project useful, consider giving the repository a star.
