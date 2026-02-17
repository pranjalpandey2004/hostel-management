import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();
//import User from './models/user.model.js';
import authRoutes from "./routes/auth.routes.js";
import authMiddleware from "./middleware/auth.middleware.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.get("/protected", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});


export default app;