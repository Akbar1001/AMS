const express = require("express");

const {
  createDepartment
} = require("../controllers/department.controller");

const protect = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

const router = express.Router();

router.post(
  "/",
  protect,
  authorize("admin"),
  createDepartment
);

module.exports = router;