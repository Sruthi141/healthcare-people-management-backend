# 🏥 Healthcare People Management System

A full-stack web application built as part of the **TheRightDoctors MEAN Stack Developer Assignment**.
This project allows users to manage a list of people with complete CRUD operations using Angular and Node.js.

---

## 🚀 Tech Stack

### Frontend

* Angular 8
* TypeScript
* HTML5, CSS3
* Angular Animations

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## 📌 Features

### ✅ Angular SPA (Frontend)

* List all people 👥
* Add new person ➕
* Edit person ✏️
* Delete person ❌
* Responsive UI with modern design
* Smooth animations & transitions
* Blur background healthcare-themed UI

---

### ✅ REST API (Backend)

| Method | Endpoint          | Description       |
| ------ | ----------------- | ----------------- |
| GET    | `/api/person`     | Get all people    |
| POST   | `/api/person`     | Create new person |
| PUT    | `/api/person/:id` | Update person     |
| DELETE | `/api/person/:id` | Delete person     |

---

## 📂 Project Structure

```
RightDoctor/
│
├── angular-frontend/
│   ├── src/
│   ├── components/
│   ├── services/
│
├── node-backend/
│   ├── config/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── server.js
```

---

## ⚙️ Setup Instructions

### 🔹 1. Clone Repository

```bash
git clone https://github.com/your-username/healthcare-people-management.git
cd healthcare-people-management
```

---

### 🔹 2. Backend Setup

```bash
cd node-backend
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```bash
npm start
```

Backend runs at:

```
http://localhost:5000
```

---

### 🔹 3. Frontend Setup

```bash
cd angular-frontend
npm install
npm start
```

Frontend runs at:

```
http://localhost:4200
```

---

## 🔗 API Integration

Frontend communicates with backend using:

```ts
http://localhost:5000/api/person
```

---

## 🎨 UI Highlights

* Glassmorphism design
* Blur background effect
* Healthcare-themed UI
* Smooth Angular animations
* Clean and modern layout

---

## 📸 Screens (Optional)

* List View
* Add/Edit Form
* Delete Confirmation

---

## 🧪 Assignment Requirements Covered

✔ Angular Single Page Application
✔ 3 Views (List, Edit, Delete)
✔ REST API Integration
✔ Node.js + MongoDB Backend
✔ CRUD Operations
✔ Clean UI with animations

---

## 📌 Notes

* Backend runs on port **5000**
* Frontend runs on port **4200**
* Make sure MongoDB is connected
* CORS enabled for frontend-backend communication

---

## 👩‍💻 Author

**Sruthi Kommati**
B.Tech CSE (2026)
IIIT Sri City

📧 [sruthi.k22@iiits.in](mailto:sruthi.k22@iiits.in)
🔗 GitHub: https://github.com/Sruthi141

---

## ⭐ Acknowledgment

Developed as part of **TheRightDoctors Assignment**
India’s Leading Medical Knowledge Platform 🚀
