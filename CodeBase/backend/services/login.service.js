
// Import the bcrypt module to do the password comparison
const bcrypt = require("bcrypt");
// Import the employee service to get employee by email
const employeeService = require("./employee.service");



// *** Function to handle employee login *** //
async function logIn(employeeData) {
  try {
    let returnData = {}; // Object to be returned
    const employee = await employeeService.getEmployeeByEmail(
      employeeData.employee_email
    );

    // If employee does not exist, return a failure message
    if (employee.length === 0) {
      returnData = {
        status: "fail",
        message: "Employee does not exist",
      };
      return returnData;
    }

    // If employee exists, compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(
      employeeData.employee_password,
      employee[0].employee_password_hashed
    );

    // If password does not match, return a failure message
    if (!passwordMatch) {
      returnData = {
        status: "fail",
        message: "Incorrect password",
      };
      return returnData;
    }

    // If password matches, return the employee data
    returnData = {
      status: "success",
      data: employee[0],
    };
    return returnData;
  } catch (error) {
    console.log(error);
  }
}

// Export the function
module.exports = {
  logIn,
};
