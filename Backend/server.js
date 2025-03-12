const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authroutes");
require("dotenv").config();
const cors = require("cors");

const Professor = require("./models/professor");
const professorRoutes = require("./routes/professorRoutes");


const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/auth", authRoutes);

app.use("/auth", professorRoutes);

const PORT = process.env.PORT || 6030;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
