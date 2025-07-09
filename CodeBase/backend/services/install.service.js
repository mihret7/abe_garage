// import the query function from the database configuration module
const { query } = require("../config/db.config");

// import the filesystem module to read SQL file content
const fs = require("fs");

// import the path module to handle file path resolution
const path = require("path");

// define an asynchronous function to create database tables
async function install() {
  // resolve the full path to the initial SQL file
  const sqlFilePath = path.join(__dirname, "sql/initial-queries.sql");

  // variables to store SQL queries and the final response message
  let queries = [];
  let finalMessage = {};
  let tempLine = ""; // used to accumulate lines for a full SQL statement

  try {
    // read the content of the SQL file
    const fileContent = fs.readFileSync(sqlFilePath, "utf-8");
    const lines = fileContent.split("\n");

    // process each line to build complete SQL statements
    const executed = await new Promise((resolve, reject) => {
      // iterate through each line in the SQL file
      lines.forEach((line) => {
        // skip comments and empty lines
        if (line.trim().startsWith("--") || line.trim() === "") {
          return;
        }

        // accumulate the current line
        tempLine += line;

        // when a line ends with ';', treat it as the end of a SQL statement
        if (line.trim().endsWith(";")) {
          // trim and push the complete SQL statement to the list
          const sqlQuery = tempLine.trim();
          queries.push(sqlQuery);
          // reset for the next query
          tempLine = "";
        }
      });

      // finish building the query list
      resolve("Queries are added to the list ");
    });

    // execute each SQL query one by one
    for (let i = 0; i < queries.length; i++) {
      try {
        // run the query using the database connection
        const result = await query(queries[i]);
        console.log("Table Created");
      } catch (error) {
        // on error, update the final message with failure info
        finalMessage.message = "Not all tables are not created";
        console.error("Error creating table:", error.message);
      }
    }

    // if no errors occurred, set success message
    if (!finalMessage.message) {
      finalMessage.message = "All tables are created successfully";
      finalMessage.status = 200;
    } else {
      // otherwise, indicate failure status
      finalMessage.status = 500;
    }
  } catch (error) {
    // handle file read errors
    console.error("Error reading the SQL file:", error.message);
    finalMessage.message = "Error reading the SQL file";
    finalMessage.status = 500;
  }

  // return the final result message
  return finalMessage;
}

// export the install function to be used in the controller
module.exports = { install };
