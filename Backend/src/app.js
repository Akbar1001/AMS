const express = require("express");
const cors = require("cors");
const pool = require("./db/db");

const authRoutes=require("./routes/auth.routes.js")
const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "University Management API Running"
  });
});


// Database Test Route
app.get("/test-db", async (req, res) => {
  try {

    const result = await pool.query("SELECT NOW()");

    res.json({
      success: true,
      time: result.rows[0]
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
});

//Auth routes
app.use("/api/auth",authRoutes);


module.exports = app;