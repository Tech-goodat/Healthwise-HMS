Got it!  
Here’s the fully updated `README.md`, now **including** an explanation of **how the backend works** and your **backend GitHub repository link**:

---

# Healthwise Frontend

Welcome to the **Healthwise Frontend** project!  
This is a responsive web application built with **React.js** and **TailwindCSS**, allowing healthcare providers to manage client data, programs, and services efficiently.

🔗 **Live Demo:**  
[https://main.d2crs00234wk9u.amplifyapp.com/](https://main.d2crs00234wk9u.amplifyapp.com/)

---

## 🚀 Features

- User authentication with session management
- Dashboard overview of key statistics (clients, programs, enrollments)
- Live client search with dynamic results
- Add new clients through a user-friendly form
- Remove clients directly from the dashboard
- Responsive design optimized for desktop and mobile
- Smooth navigation across pages

---

## 🛠 Tech Stack

- **React.js** — Frontend library
- **TailwindCSS** — Utility-first CSS framework
- **React Router** — Client-side routing
- **AWS Amplify** — Hosting and deployment
- **Heroicons / React Icons** — For clean, scalable icons

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── DashBoard.jsx
│   ├── NavBar.jsx
│   └── (Other UI Components)
│
├── pages/
│   ├── Home.jsx
│   ├── SignUp.jsx
│   ├── ClientForm.jsx
│   └── UserModal.jsx
│
├── App.jsx
├── main.jsx
└── assets/
```

---

## 📜 Installation and Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/healthwise-frontend.git
   cd healthwise-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit `http://localhost:5173` to view the app.

---

## 📡 Backend API

This frontend connects to a **Flask backend API** hosted at:

```
https://healthwise-5j1x.onrender.com/
```

### 🛠 How the Backend Works:

- **Built With**: Python, Flask, Flask-SQLAlchemy
- **Database**: SQLite (locally) and PostgreSQL (production)
- **Core Features**:
  - User authentication (login, signup, token session management)
  - CRUD operations for Clients, Programs, Services, and Enrollments
  - RESTful API endpoints to fetch, create, update, and delete records
  - CORS enabled to allow frontend-backend communication
  - JSON Web Tokens (JWT) for secure session management

📂 **Backend Repository**:  
[https://github.com/Tech-goodat/Healthwise-HMS-backend](https://github.com/Tech-goodat/Healthwise-HMS-backend)

---

## 🖌️ UI Highlights

- Gradient backgrounds for key metric cards
- Interactive table with client data and quick actions
- Search modal with real-time suggestions
- Clean, minimalist dashboard for better user experience

---

## ✨ Future Improvements

- Add client edit functionality
- Implement pagination for client list
- Add client profile photos
- Role-based access (Admin, Doctor, Receptionist)
- Notifications and alerts for operations

---

## 🧑‍💻 Author

- **Felix Kiprotich Cheruiyot**

---

## 📃 License

This project is licensed under the MIT License.

