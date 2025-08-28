// backend/app.js
const express = require('express');
const authRoutes = require('./routes/auth.routes');
const app = express();

 
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Express server is running!");
});

app.use("/api", authRoutes);

module.exports = app;
