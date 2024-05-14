// Import the express module to create an express application
const express = require('express');

// Import the router modules for handling routes
const pr = require('./routes/pages');
const nr = require('./routes/notes');

// Create an express application
const app = express();

// Define the port on which the server will listen for requests
// Use the port defined in the environment variables or default to 3001
const PORT = process.env.Port || 3001;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to parse URL-encoded data with the querystring library
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Use the 'pages' router for requests to the root path
app.use('/', pr);

// Use the 'notes' router for requests to the root path
app.use('/', nr);

// Start the server and listen on the defined port
// Log a message to the console when the server is running
app.listen(PORT, () => {
    console.info(`Server started on http://localhost:${PORT}`);
});
