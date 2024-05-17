const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();
// Set Cors
var corsOptions = {
    origin:true
  };
  app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.send("Pong!");
});

// Include route files
require("./routes/api/shipments.routes")(app);

// Use routes

// Start the server
const port = process.env.PORT || 3030; // You can use environment variables for port configuration
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
