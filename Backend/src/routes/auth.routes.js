const express = require("express");

const {
  signup,
  login
} = require("../controllers/auth.controller");

const router = express.Router();
const protect = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

router.post("/signup", signup);

router.post("/login", login);

router.get(
  "/profile",
  protect,
  (req, res) => {

    res.json({
      success: true,
      user: req.user
    });

  }
);

router.get(
  "/admin-dashboard",
  protect,
  authorize("admin"),
  (req, res) => {

    res.json({
      success: true,
      message: "Welcome Admin"
    });

  }
);

module.exports = router;