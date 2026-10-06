# Project Structure

## Classification

Full-stack MERN-style application with separate Vite/React frontend and Express/Mongoose backend.

## Modules and layers

- `frontend/`: React UI, routing, Tailwind CSS styling.
  - `src/App.jsx`: client route table.
  - `src/Login.jsx`: login page and login request.
  - `src/Signup.jsx`: registration page and registration request.
  - `src/main.jsx`: browser entry point.
- `backend/`: Node.js ES-module Express API.
  - `server.js`: process entry point and database-before-listen startup.
  - `src/app.js`: middleware and route composition.
  - `src/routes/`: auth and attendance route declarations.
  - `src/controllers/`: registration, login, and attendance behavior.
  - `src/models/`: MongoDB/Mongoose User and Attendance schemas.
  - `src/middleware/`: JWT authentication and role checks.
  - `src/config/db.js`: MongoDB connection.

## Functional areas currently present

- Authentication: registration, login, JWT issuance.
- Authorization: bearer-token middleware and user/admin role field.
- Attendance: resident can mark one present record per day.
- UI shell: signup and login pages only.

## Major missing product areas

Resident dashboard, attendance history, hostel issue/complaint reporting, room/allocation data, notices, fees, admin workflows, and operational error/loading states.
