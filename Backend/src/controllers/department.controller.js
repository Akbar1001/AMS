const pool = require("../db/db");

const createDepartment = async (req, res) => {

  try {

    const { name } = req.body;

    // Validation
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Department name is required"
      });
    }

    // Check existing department
    const existingDepartment = await pool.query(
      "SELECT * FROM departments WHERE name = $1",
      [name]
    );

    if (existingDepartment.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Department already exists"
      });
    }

    // Create department
    const result = await pool.query(
      `
      INSERT INTO departments(name)
      VALUES($1)
      RETURNING *
      `,
      [name]
    );

    return res.status(201).json({
      success: true,
      message: "Department created successfully",
      department: result.rows[0]
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });

  }

};

module.exports = {
  createDepartment
};