// Import the query function from the db.config.js file
const connection = require("../config/db.config");




// *** a function to create an async function to create a new service in the database *** //
async function createService(common_services) {
  try {
    // Prepare the SQL query
    const sql = `INSERT INTO common_services (service_name, service_description) VALUES (?, ?)`;
    const params = [
      common_services.service_name,
      common_services.service_description
    ];

    // Execute the query
    const result = await connection.query(sql, params);

    return result;
  } catch (error) {
    // Handle any errors that occur during the query execution
    console.error("Error creating service:", error);
    throw new Error("Could not create service. Please try again later."); // You can customize the error message as needed
  }
}





// *** A function to update an existing service *** //
async function updateService(service_id, service_name, service_description) {
  try {
    const result = await connection.query(
      "UPDATE common_services SET service_name = ?, service_description = ? WHERE service_id = ?",
      [service_name, service_description, service_id]
    );

    return result;
  } catch (error) {
    throw new Error("Error updating service: " + error.message);
  }
}






// *** A function to delete a service by ID *** //
async function deleteService(service_id) {
  try {
    console.log("hwg",service_id)
    const result = await connection.query(
      "DELETE FROM common_services WHERE service_id = ?",
      [ service_id]
    );

    return result;
  } catch (error) {
    console.log(" hew")
    throw new Error("Error Deleting service: " + error.message);
  }
}






// *** A function to get all services *** //
async function getAllServices() {
  try {
    const sql = `SELECT * FROM common_services`;
    const result = await connection.query(sql);
    return result;
  } catch (error) {
    console.error("Error getting services:", error);
    throw new Error("Could not get services. Please try again later.");

  }
}





// *** A function to get a single service by ID *** //
async function getSingleService(service_id) {
  try {
    const sql = `SELECT * FROM common_services WHERE service_id = ?`;
    const result = await connection.query(sql, [service_id]);
    return result;
  } catch (error) {
    console.error("Error getting single service:", error);
    throw new Error("Could not get service. Please try again later.");
  }
}





// Export the function
module.exports = {
  createService,
  updateService,
  deleteService,
  getAllServices,
  getSingleService
};
