const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/service.controller");




// ** create routes ** //
router.post("/api/service", serviceController.createService);
router.put('/api/service-update/:id', serviceController.updateService);
router.delete('/api/deleteservice/:service_id', serviceController.deleteService);
router.get('/api/services', serviceController.getAllServices);
router.get("/api/services/:id",  serviceController.getSingleService);




module.exports = router;
