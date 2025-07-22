// import the express module
const express = require("express");

// call the router method from express to create the router
const router = express.Router();

// import the authMiddleware
const {
  verifyToken,
  isAdmin,
} = require("../middlewares/auth.middleware");

// import the employee controller
const employeeController = require("../controllers/employee.controller");


// create a route to handle the employee request in post
router.post(
  "/api/employee",
  employeeController.createEmployee
);

// create a route to handle the get all employee request in get
router.get(
  "/api/employees",
  [verifyToken, isAdmin],
  employeeController.getAllEmployees
);

// create a route to handle the get single employee request in get
router.get(
  "/api/employee/:id",
  [verifyToken],
  employeeController.getSingleEmployee
);

// create a route to handle employee info update
router.put(
  "/api/employee/update",
  [verifyToken, isAdmin],
  employeeController.updateEmployee
);

// create a route to handle employee delete
router.delete(
  "/api/employee/:id",
  [verifyToken, isAdmin],
  employeeController.deleteEmployee
);

// export the router
module.exports = router;
