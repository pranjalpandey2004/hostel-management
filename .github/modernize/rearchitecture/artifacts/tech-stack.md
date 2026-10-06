# Technology Stack

- Frontend: React 19, React DOM 19, React Router DOM 7, Vite 8, Tailwind CSS 4.
- Backend: Node.js ES modules, Express 5, Mongoose 8, MongoDB.
- Authentication: bcryptjs password hashing and jsonwebtoken JWTs.
- Middleware: cors, dotenv, nodemon for development.
- Runtime configuration: backend reads `MONGO_URI`, `JWT_SECRET`, and optionally `PORT` from environment.
- Frontend currently hard-codes the backend URL as `http://localhost:5000`.
- No automated test framework, shared API client, schema validation library, centralized error handler, or frontend state/auth provider is present.
- Dependency manifests and lockfiles exist independently under `frontend/` and `backend/`.
