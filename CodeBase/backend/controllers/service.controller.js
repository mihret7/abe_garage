// Import service functions from the service layer
const serviceService = require("../services/service.service");





// *** Controller to create a new service *** //
async function createService(req, res, next) {
  try {
    // Extract service data from request body
    const serviceData = req.body;

    // Call service layer to create the new service
    const service = await serviceService.createService(serviceData);

    // If creation failed, send error response
    if (!service) {
      return res.status(400).json({
        error: "Failed to add the service!",
      });
    }

    // If successful, return success response
    res.status(200).json({
      status: "Service added successfully",
    });
  } catch (error) {
    // Log error and send 500 response
    console.error(error);
    res.status(500).json({
      error: "Something went wrong!",
    });
  }
}






// *** Controller to update an existing service *** //
async function updateService(req, res) {
  // Extract fields from the request body and params
  const { service_name, service_description } = req.body;
  const { id } = req.params;
  const service_id = id;

  // Validate required inputs
  if (!service_name || !service_description) {
    return res.status(400).json({ msg: "Invalid input" });
  }

  try {
    // Attempt to update the service
    const result = await serviceService.updateService(
      service_id,
      service_name,
      service_description
    );

    // If no rows were affected, the service was not found
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Service not found" });
    }

    // Return success message
    return res.status(200).json({ msg: "The service has been updated" });
  } catch (error) {
    // Log error and send 500 response
    console.error("Error updating service:", error.message);
    return res.status(500).json({ msg: "Something went wrong" });
  }
}






// *** Controller to delete a service *** //
async function deleteService(req, res) {
  const { service_id } = req.params;

  try {
    // Attempt to delete the service by ID
    const result = await serviceService.deleteService(service_id);

    // If no rows were affected, the service was not found
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Service not found" });
    }

    // Return success message
    return res.status(200).json({ msg: "The service has been deleted" });
  } catch (error) {
    // Log error and send 500 response
    console.error("Error deleting service:", error.message);
    return res.status(500).json({ msg: "Something went wrong" });
  }
}






// *** Controller to get all services *** //
async function getAllServices(req, res, next) {
  try {
    // Retrieve all services from the database
    const services = await serviceService.getAllServices();

    // If retrieval fails, send error response
    if (!services) {
      res.status(400).json({
        error: "Failed to get all services!",
      });
    } else {
      // If successful, return data
      res.status(200).json({
        status: "success",
        data: services,
      });
    }
  } catch (error) {
    // Log error and send 500 response
    console.error("Error retrieving all services:", error.message);
    res.status(500).json({ msg: "Something went wrong" });
  }
}







// *** Controller to get a single service by ID *** //
async function getSingleService(req, res, next) {
  try {
    // Extract service ID from URL parameters
    const serviceId = req.params.id;

    // Fetch the service from the database
    const service = await serviceService.getSingleService(serviceId);

    // Return the fetched service
    res.status(200).json({
      status: "success",
      data: service,
    });
  } catch (error) {
    // Log and return error
    console.error("Error getting single service:", error);
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
}







// Export all controller functions 
module.exports = {
  createService,
  updateService,
  deleteService,
  getAllServices,
  getSingleService,
};
