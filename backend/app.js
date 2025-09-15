// backend/app.js
import express from "express";
import "dotenv/config";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// Middleware JSON
app.use(express.json());

// Rotas
app.use("/api", authRoutes);

export default app;
