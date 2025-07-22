// Load environment variables from a .env file into process.env
require("dotenv").config();

// Import the mysql2 package (using the promise-based API)
const mysql = require("mysql2/promise");

// Define database configuration using environment variables
const dbConfig = {
  host: process.env.DB_HOST, // Database host
  user: process.env.DB_USER, // Database username
  password: process.env.DB_PASSWORD, // Database password
  database: process.env.DB_NAME, // Database name
  connectionLimit: 10, // Maximum number of connections in the pool
};

// Create a connection pool with the defined configuration
const pool = mysql.createPool(dbConfig);

// Function to test the database connection
async function testConnection() {
  try {
    // Get a connection from the pool
    const connection = await pool.getConnection();
    console.log("Connected to the database successfully.");

    // Release the connection back to the pool
    connection.release();
  } catch (err) {
    // Log connection error and exit the application
    console.error("Unable to connect to the database:", err.message);
    process.exit(1);
  }
}

// Function to execute a SQL query with optional parameters
async function query(sql, params) {
  try {
    // Execute the SQL query with provided parameters
    const [rows, fields] = await pool.execute(sql, params);

    // Return the retrieved rows
    return rows;
    
  } catch (error) {

    // Log any error that occurs during query execution
    console.error("Error executing query:", error);

    // Rethrow the error to be handled by the caller
    throw error;
  }
}

// Call the function to test the connection when this file runs
testConnection();

// Export the query function to be used in other modules
module.exports = {
  query,
};
