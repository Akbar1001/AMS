const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");

const departmentRoutes = require("./routes/department.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "University Management API Running"
  });
});

app.use("/api/auth", authRoutes);

app.use(
  "/api/departments",
  departmentRoutes
);

module.exports = app;