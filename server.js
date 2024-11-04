// Dependencies
// Set up express server & tell node we are creating an express server

const express = require("express");
const app = express ();

// Sets the port for listener
const PORT = process.env.PORT || 3001;

// Routers
const apiRouter = require("./routes/apiRoutes");
const htmlRouter = require("./routes/htmlRoutes");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware 
app.use(express.static("public"));
app.use(express.static("db"));
// order matters here!
app.use(apiRouter);
app.use(htmlRouter);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
