require("dotenv").config();

const express = require("express");
const cors = require("cors");

const noteRoutes = require("./routes/noteRoutes");



const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/notes", noteRoutes);

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Secure Notes API Running",
  });
});

// Auth Routes
app.use("/auth", authRoutes);

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});