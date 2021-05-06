const express = require("express");
const connectDB = require("./db/connect");

const app = express();

// Config dotenv
require("dotenv").config();

// Init middleware
app.use(express.json());

// Connect DB
connectDB();

// Define Routes
app.use("/api/register", require("./api/register"));
app.use("/api/login", require("./api/login"));
app.use("/api/getUser", require("./api/getUser"));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Running ${PORT}`);
});
