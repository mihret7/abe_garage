// Import employee-related service functions from the employee service layer
const {
  checkIfEmployeeExists,
  createEmploye,
  fetchAllEmployees,
  updateEmployeeService,
  ServicedeleteEmployee,
  getSingleEmployeeService,
} = require("../services/employee.service");





// *** Controller to log in an employee *** //
async function createEmployee(req, res, next) {
  const { employee_email } = req.body;

  // Check if an employee already exists with the provided email
  const employeeExists = await checkIfEmployeeExists(employee_email);

  // If employee exists, send a 400 response
  if (employeeExists) {
    return res.status(400).json({
      msg: "This email address is already associated with  another employee!",
    });
  } else {
    try {
      // Extract the employee data from request body
      const employeeData = req.body;

      // Create a new employee using the service function
      const employee = await createEmploye(employeeData);

      if (!employee) {
        // If creation failed, send error response
        return res.status(400).json({
          error: "Failed to add the employee!",
        });
      } else {
        // If successful, return success message
        return res.status(200).json({
          status: "Employee added successfully! ",
        });
      }
    } catch (error) {
      // Catch any unexpected errors
      return res.status(400).json({
        error: "Something went wrong!",
      });
    }
  }
}






// *** Controller to retrieve all employees *** //
async function getAllEmployees(req, res, next) {
  try {
    // Fetch all employees using the service function
    const employees = await fetchAllEmployees();

    if (!employees) {
      // If retrieval fails, send error response
      res.status(400).json({
        error: "Failed to get all employees!",
      });
    } else {
      // If successful, return employees data
      res.status(200).json({
        status: "Employees retrieved successfully! ",
        employees: employees,
      });
    }
  } catch (error) {
    // Catch any unexpected errors
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}







// *** Controller to retrieve a single employee by ID *** //
async function getSingleEmployee(req, res, next) {
  const employee_hash = req.params.id;

  try {
    // Fetch a single employee using the service function
    const singleEmployee = await getSingleEmployeeService(employee_hash);

    if (!singleEmployee) {
      // If not found, send error response
      res.status(400).json({
        error: "Failed to get employee!",
      });
    } else {
      // If successful, return the employee data
      res.status(200).json({
        status: "Employee retrieved successfully! ",
        singleEmployee: singleEmployee,
      });
    }
  } catch (error) {
    // Catch any unexpected errors
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}








// *** Controller to update employee data *** //
async function updateEmployee(req, res, next) {
  try {
    // Call the update service with new employee data
    const updateEmployee = await updateEmployeeService(req.body);

    // Extract affected row counts from multiple update operations
    const rows1 = updateEmployee.rows1.affectedRows;
    const rows2 = updateEmployee.rows2.affectedRows;
    const rows3 = updateEmployee.rows3.affectedRows;

    if (!updateEmployee) {
      // If update failed, send error response
      res.status(400).json({
        error: "Failed to Update Employee",
      });
    } else if (rows1 === 1 && rows2 === 1 && rows3 === 1) {
      // If all updates were successful
      res.status(200).json({
        status: "Employee Succesfully Updated! ",
      });
    } else {
      // If partial update, return a warning
      res.status(400).json({
        status: "Update Incomplete!",
      });
    }
  } catch (error) {
    // Catch any unexpected errors
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}







// *** Controller to delete an employee *** //
async function deleteEmployee(req, res, next) {
  const id = req.params.id;

  try {
    // Attempt to delete the employee with the given ID
    const deleteEmployeeResult = await ServicedeleteEmployee(id);

    if (deleteEmployeeResult) {
      // If deletion succeeded, return success message
      res.status(200).json({
        message: "Employee successfully deleted!",
      });
    } else {
      // If deletion failed, return error
      res.status(400).json({
        status: "Delete incomplete!",
      });
    }
  } catch (error) {
    // Catch any unexpected errors
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}







// Export all controller functions
module.exports = {
  createEmployee,
  getAllEmployees,
  updateEmployee,
  deleteEmployee,
  getSingleEmployee,
};
