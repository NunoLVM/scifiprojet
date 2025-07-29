
import mysql2 from "mysql2";


// Create the database connection
const db = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnection: true,
  connectionLimit: 10,
  queueLimit: 0
});


// Test the connection
// db.connect((err) => {
//   if (err) {
//     console.error("Error connecting to MySQL:", err.message);
//   } else {
//     console.log("🛸 Connection to MySQL established successfully!");
//   }
// });

export default db;
