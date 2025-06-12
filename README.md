# 📰 Medium Clone – Full Stack Blog App

A full-stack blogging platform inspired by Medium, built with modern web technologies including **React**, **Tailwind CSS**, **Prisma**, and **PostgreSQL**. It features secure authentication, a clean UI, and the ability to create, view, and edit blog posts.

---

## 📌 Features

- 🔐 **Authentication** – Signup & login with JWT-based auth.
- 🏠 **Protected Home Page** – Only accessible after login, showing a list of all blogs.
- ✍️ **Create Blog Page** – Authenticated users can create new blogs.
- 📝 **View Blog Page** – Read individual blog posts.
- 🧰 **Reusable Zod Input Validations** – Shared across frontend and backend via a published npm module.
- 🎨 **Tailwind CSS** – For rapid and responsive UI development.
- 🚀 **Prisma Accelerate** – Optimized DB performance using connection pooling.

---

## 🧱 Tech Stack

### ⚙️ Backend
- **Node.js**
- **Hono.js (or Express)**
- **Prisma + PostgreSQL**
- **JWT for Authentication**
- **Prisma Accelerate** – For connection pooling

### 🎨 Frontend
- **React JS**
- **React Router DOM**
- **Tailwind CSS**
- **Zod** – Input validation using typesafe schemas

### 📦 Shared Package
- **Zod Schema Module (Published to npm)** – Shared between frontend and backend for consistent validation.

---

## 🗃️ API Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| POST   | `/signup`        | Register a new user      |
| POST   | `/signin`        | Login and receive token  |
| GET    | `/blogs`         | Fetch all blog posts     |
| GET    | `/blog/:id`      | Get a single blog post   |
| POST   | `/blog`          | Create a new blog post   |
| PUT    | `/blog/:id`      | Update a blog post       |

All blog endpoints are protected and require a valid JWT in the `Authorization` header.

---
