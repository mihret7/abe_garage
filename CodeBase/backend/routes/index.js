const express = require("express");


// call router method from express
const router = express.Router();



//  Import Install router
const installRouter = require("./install.routes");
// Import the login routes
const loginRoutes = require("./login.routes");
//  Import service router
const serviceRoutes = require("./service.routes");
const customerRoutes = require("./customer.routes");
const vehicleRoutes = require("./vehicle.routes");
const employeeRoutes = require("./employee.routes");
const orderRoutes = require("./order.routes");




// =========================



// add the install router to the main router
router.use(installRouter);


module.exports = router;
