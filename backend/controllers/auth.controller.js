const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET; // stored in .env file

const login = (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if all fields are provided
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    // Query database for user by email
    const query = "SELECT * FROM users WHERE email = ?";
    db.execute(query, [email], async (err, results) => {
      if (err) {
        console.error("Database error:", err.message);
        return res.status(500).json({ message: "Internal database error." });
      }

      // If no user found
      if (results.length === 0) {
        return res.status(401).json({ message: "Invalid email or password." });
      }

      const user = results[0];

      // Compare provided password with encrypted password in database
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password." });
      }

      // Generate JWT token
      const token = jwt.sign(
        {
          userId: user.id,
          username: user.username,
          role: user.role,
        },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      // Send response with token and user info
      res.status(200).json({
        message: "Login successful!",
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
      });
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Login failed due to server error." });
  }
};

// Controller function to handle user signup
const signup = (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Simple check for missing fields
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Hash the password
    const hashedPassword = bcrypt.hash(password, 10);

    // Insert user into database
    const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.execute(query, [username, email, hashedPassword], (err) => {
      if (err) {
        console.error("Error inserting user:", err.message);
        return res.status(500).json({ message: "Database error." });
      }

      res.status(201).json({ message: "User registered successfully!" });
    });
  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).json({ message: "Something went wrong." });
  }
};

module.exports = { login, signup };