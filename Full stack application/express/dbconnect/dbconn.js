// Import the 'mysql' module
const mysql = require("mysql");

// Create a connection to the MySQL database
const mysqlconn = mysql.createConnection({
  host: "127.0.0.1",    // MySQL server IP address
  user: "root",         // MySQL username
  password: "root",    // MySQL password
  port: 3306,           // MySQL server port
  database: "test"      // MySQL database name
});

// Connect to the MySQL database
mysqlconn.connect((err) => {
  if (err) {
    console.log(err);   // Print any error that occurred during connection
  } else {
    console.log("Connection successful");   // Print a success message on successful connection
  }
});

// Export the MySQL connection for use in other modules
module.exports = mysqlconn;
