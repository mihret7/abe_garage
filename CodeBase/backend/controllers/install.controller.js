// Import the install service that handles DB table creation logic
const installService = require("../services/install.service");



// *** Create a controller function to handle the installation request *** //

async function install(req, res, next) {
  // Call the install method from the service to create tables
  // Capture the returned message (success/failure info)
  const installMessage = await installService.install();

  // Check if the installation was successful based on status code
  if (installMessage.status === 200) {
    // If successful, send a success response to the client
    res.status(200).json({
      message: installMessage,
    });
  } else {
    // If there was an error, send a failure response
    res.status(500).json({
      message: installMessage,
    });
  }
}

// Export the install function so it can be used in route definitions
module.exports = {
  install
};
