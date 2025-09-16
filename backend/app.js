// backend/app.js
import express from "express";
import "dotenv/config";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import moviesRoutes from "./routes/movies.routes.js";

const app = express();
app.use(cors());

// Middleware JSON
app.use(express.json());

// Rotas
app.use("/api", authRoutes);
app.use("/api/movies", moviesRoutes);

export default app;
