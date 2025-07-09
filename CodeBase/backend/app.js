// import express
const express = require("express");
// import dotenv
require("dotenv").config();
// import body-parser
const bodyParser = require("body-parser");
// import cors
const cors = require("cors");

// import routes
const routes = require("./routes/index");





// create express web server
const app = express();

// Enable CORS middleware
app.use(cors());

// Enable JSON middleware
app.use(bodyParser.json());

// create a port from env file
const port = process.env.PORT || 5000;

// Add the routes to the application as middleware
app.use(routes);



app.get("/", (req, res) => {
  res.send("check");
});



// create app listener
app.listen(port, () => {
  console.log(` listening on http://localhost:${port}`);
});


// export app
module.exports = app;
