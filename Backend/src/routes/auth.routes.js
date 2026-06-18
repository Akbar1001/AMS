const express = require("express");

const {
  signup,
  login
} = require("../controllers/auth.controller");

const router = express.Router();
const protect = require("../middleware/auth.middleware");


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

module.exports = router;