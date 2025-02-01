require("dotenv").config(); // Load .env file

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB using the connection string in the .env file
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

