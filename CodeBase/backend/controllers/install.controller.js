// import the install service module responsible for database setup operations
const installService = require("../services/install.service");

// define the install handler function to manage installation requests
async function install(req, res, next) {
  // invoke the install service to initiate table creation
  // store the returned message to determine if the installation succeeded or failed
  const installMessage = await installService.install();

  // evaluate the response and return a corresponding status to the client
  if (installMessage.status === 200) {
    // return success response with message
    res.status(200).json({
      message: installMessage,
    });
  } else {
    // return error response with message
    res.status(500).json({
      message: installMessage,
    });
  }
}

// export the install function for use in the route definition
module.exports = {
  install,
};
