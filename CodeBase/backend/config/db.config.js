// import the promise-based version of the mysql2 module
const mysql = require("mysql2/promise");

// define database connection settings using environment variables
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
};

// initialize a connection pool using the defined configuration
const pool = mysql.createPool(dbConfig);

// define an asynchronous function to run SQL queries using the connection pool
async function query(sql, params) {
  try {
    // execute the SQL statement with optional parameters and extract the rows
    const [rows] = await pool.execute(sql, params);

    // return the query result as an object containing the rows
    return { rows };
  } catch (error) {
    console.error("Error executing query:", error);
    throw error; // rethrow the error to be handled by the calling function
  }
}

// export the query function for use in other modules
module.exports = { query };
