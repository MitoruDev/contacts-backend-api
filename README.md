# 📇 Contact Manager Backend API

A lightweight backend system for managing contacts with user authentication, built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**.

---

## 🚀 Features

- User registration & login
- Authentication using JWT
- Protected routes for contacts
- Full CRUD functionality for contacts
- Clean structure with User & Contact controllers

---

## 🛠️ Technologies

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/mitorudev/contacts-backend-api.git
cd contacts-backend-api
```

2. Install dependencies

```pwsh
npm install
```

3. Create .env for config (PORT=XXXX)

```pwsh
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the server

```pwsh
npm run dev
```

The server will run on `http://localhost:8080`

## 📌 API Endpoints

### 🔐 User Routes (`/api/users`)

| Method | Endpoint    | Description                  |
| ------ | ----------- | ---------------------------- |
| POST   | `/register` | Register a new user          |
| POST   | `/login`    | Log in an existing user      |
| GET    | `/current`  | Get currently logged-in user |

---

### 📇 Contact Routes (`/api/contacts`)

| Method | Endpoint | Description                  |
| ------ | -------- | ---------------------------- |
| GET    | `/`      | Get all contacts             |
| POST   | `/`      | Create a new contact         |
| GET    | `/:id`   | Get a specific contact by ID |
| PUT    | `/:id`   | Update a contact by ID       |
| DELETE | `/:id`   | Delete a contact by ID       |

---

## ✅ Next Steps

Planned or suggested improvements:

- Input validation with Joi or express-validator
- Role-based access control
- Profile picture upload
- Pagination and filtering
- Password reset via email

---

Feel free to contribute or open issues for bugs and improvements!
