// backend/config/db.js (CommonJS)
const mysql2 = require("mysql2");

const pool = mysql2.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "scifipopcorn",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Exporta o pool; controllers chamam pool.execute(sql, params, cb)
module.exports = pool;
