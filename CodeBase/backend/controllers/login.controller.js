// Import the login service which handles authentication logic
const loginService = require("../services/login.service");

// Import the jsonwebtoken module for token creation
const jwt = require("jsonwebtoken");

// Load the JWT secret key from environment variables
const jwtSecret = process.env.JWT_SECRET_KEY;




// *** Define the login controller function *** //
async function logIn(req, res, next) {
  try {
    // Extract employee login data 
    const employeeData = req.body;

    // Call the login service to authenticate the employee
    const employee = await loginService.logIn(employeeData);

    // If login failed 
    if (employee.status === "fail") {
      return res.status(403).json({
        status: employee.status,
        message: employee.message,
      });
    }

    // If login is successful, build a token payload from employee details
    const payload = {
      employee_id: employee.data.employee_id,
      employee_email: employee.data.employee_email,
      active_employee: employee.data.active_employee,
      employee_phone: employee.data.employee_phone,
      employee_role: employee.data.company_role_id,
      employee_first_name: employee.data.employee_first_name,
      employee_last_name: employee.data.employee_last_name,
      date_of_employeed: employee.data.added_date,
    };

    
    // Sign a JWT token using the payload and secret key, valid for 24 hours
    const token = jwt.sign(payload, jwtSecret, {
      expiresIn: "24h",
    });

    // Package the token to send back to the client
    const sendBack = {
      employee_token: token,
    };

    // Respond with a success message and the token
    res.status(200).json({
      status: "success",
      message: "Employee logged in successfully",
      data: sendBack,
    });
  } catch (error) {
    // Log any unexpected errors to the console
    console.log(error);
  }
}



// Export the login controller so it can be used in route handlers
module.exports = {
  logIn,
};
