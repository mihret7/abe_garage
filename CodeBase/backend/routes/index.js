// import express
const express = require("express");


// call router method from express
const router = express.Router();



// *********import the Router files ************* //
//  Import Install router
const installRouter = require("./install.routes");
// Import the login routes
const loginRoutes = require("./login.routes");
//  Import service router
const serviceRoutes = require("./service.routes");
// Import customer-related routes
const customerRoutes = require("./customer.routes");
// Import vehicle-related routes
const vehicleRoutes = require("./vehicle.routes");
// Import employee-related routes
const employeeRoutes = require("./employee.routes");
// Import order-related routes
const orderRoutes = require("./order.routes");



// ********* Add the Router files to the main router using use() method ************* //
// add the install router to the main router
router.use(installRouter);
// add the service routes to the main router
router.use(serviceRoutes);
// add the login routes to the main router
router.use(loginRoutes);
// add the customer routes to the main router
router.use(customerRoutes);
// add the vehicle routes to the main router
router.use("/api", orderRoutes);
// add the vehicle routes to the main router
router.use(vehicleRoutes);
// add the employee routes to the main router
router.use(employeeRoutes);


// export the main router
// This allows the main router to be used in the app.js file
module.exports = router;
