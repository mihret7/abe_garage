// Import the query function to execute SQL queries from dbConfig file
const { query } = require("../config/db.config");

// Use the fs module to read files from the filesystem
const fs = require("fs");

// Use path module to handle file paths
const path = require("path");

// **** function to create database tables by executing SQL statements from a file **** //
async function install() {

  // the path to the SQL file containing the table creation queries
  const sqlFilePath = path.join(__dirname, "sql/initial-queries.sql");

  // Variables to hold individual SQL queries and final status message
  let queries = [];
  let finalMessage = {};
  let tempLine = ""; // Temporarily accumulates lines to form complete SQL queries

  try {
    // Read the entire SQL file content as UTF-8 string
    const fileContent = fs.readFileSync(sqlFilePath, "utf-8");

    // Split the file content into lines
    const lines = fileContent.split("\n");

    // Use a promise to asynchronously process lines and build queries array
    const executed = await new Promise((resolve, reject) => {

      // Loop through each line in the SQL file
      lines.forEach((line) => {
        // Ignore lines that are comments (start with '--') or are empty
        if (line.trim().startsWith("--") || line.trim() === "") {
          return;
        }

        // Append current line to tempLine to accumulate multi-line queries
        tempLine += line;

        // When a line ends with ';' this indicates end of a SQL query
        if (line.trim().endsWith(";")) {

          // Trim and store the complete query
          const sqlQuery = tempLine.trim();

          // Add this complete query to the queries array
          queries.push(sqlQuery);

          // Reset tempLine for next query
          tempLine = "";
        }
      });

      // After processing all lines, resolve the promise
      resolve("Queries are added to the list");
    });






    // Loop through the prepared queries and execute each asynchronously
    for (let i = 0; i < queries.length; i++) {
      try {
        // Execute each SQL query using the query function from db config
        const result = await query(queries[i]);
        console.log("Table Created");
      } catch (error) {
        // If an error occurs, log it and prepare a failure message
        finalMessage.message = "Not all tables are not created";
        console.error("Error creating table:", error.message);
      }
    }




    // If no errors were recorded, set success message and status
    if (!finalMessage.message) {
      finalMessage.message = "All tables are created successfully";
      finalMessage.status = 200;
    } else {
      // Otherwise, set failure status
      finalMessage.status = 500;
    }
  } catch (error) {
    // Catch errors related to reading the SQL file and log them
    console.error("Error reading the SQL file:", error.message);
    finalMessage.message = "Error reading the SQL file";
    finalMessage.status = 500;
  }

  // Return the final result message to the caller (controller)
  return finalMessage;
}





// Export the install function to be used in the install controller
module.exports = { install };
