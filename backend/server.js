import "dotenv/config";

// import dotenv from "dotenv";
// dotenv.config();

import express from "express";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Express server with modern modules is running!");
});

// Mount auth routes
app.use("/api", authRoutes); // enables /api/signup

// Start server
app.listen(PORT, () => {
  console.log(`🔊 Server started at http://localhost:${PORT}`);
});
