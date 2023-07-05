const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routers/router.js");

// Enable Cross-Origin Resource Sharing (CORS) for requests from http://localhost:3000
app.use(cors({ origin: "http://localhost:3000" }));

// Parse request bodies in JSON format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use the router for handling routes
app.use("/", router);

// Start the server on port 3005
app.listen(3005, () => {
  console.log("Server running on port 3005");
});

// Export the app for use in other modules
module.exports = app;
