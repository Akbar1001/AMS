const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "University Management API Running"
  });
});


// Auth Routes
app.use("/api/auth", authRoutes);


module.exports = app;