const pool = require("../db/db");

const createDepartment = async (req, res) => {

  try {

    const { name } = req.body;

    res.json({
      success: true,
      message: "Create department endpoint working",
      name
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

module.exports = {
  createDepartment
};