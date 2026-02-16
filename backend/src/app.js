import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();
import User from './models/user.model.js';
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get("/create-test-user", async (req, res) => {
  try {
    const user = await User.create({
      name: "Test User1",
      email: "test1@example.com",
      password: "123456",
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default app;