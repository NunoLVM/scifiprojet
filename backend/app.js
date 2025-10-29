// backend/app.js
import express from "express";
import "dotenv/config";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import moviesRoutes from "./routes/movies.routes.js";

const requiredEnvVars = ["JWT_SECRET"];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.error(`Environment variable ${envVar} is not defined.`);
    if (process.env.NODE_ENV !== "test") {
      console.error("The application cannot start without the required environment variables.");
      process.exit(1);
    }
  }
});


const app = express();
app.use(cors());

// Middleware JSON
app.use(express.json());

// Rotas
app.use("/api", authRoutes);
app.use("/api/movies", moviesRoutes);

export default app;
