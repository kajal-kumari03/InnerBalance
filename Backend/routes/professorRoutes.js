const express = require("express");
const bcrypt = require("bcryptjs");
const Professor = require("../models/professor");

const router = express.Router();

// Route to add a professor
router.post("/add-professor", async (req, res) => {
    try {
        const { userId, name, phoneNumber, whatsappNumber, email, password, educationDetails, experience, address, pricePerSession } = req.body;

        // Check if all required fields are provided
        if (!userId || !name || !phoneNumber || !email || !password || !educationDetails || !experience || !address || !pricePerSession) {
            return res.status(400).json({ message: "Please provide all required details." });
        }

        // Check if email or phone number is already used
        const existingProfessor = await Professor.findOne({ $or: [{ email }, { phoneNumber }] });
        if (existingProfessor) {
            return res.status(400).json({ message: "Professor with this email or phone number already exists." });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create professor object
        const professor = new Professor({
            userId,
            name,
            phoneNumber,
            whatsappNumber: whatsappNumber || phoneNumber,
            email,
            password: hashedPassword,
            educationDetails,
            experience,
            address,
            pricePerSession,
            status: "pending" // Default status
        });

        // Save to database
        await professor.save();
        res.status(201).json({ message: "Professor added successfully", professor });
    } catch (error) {
        res.status(500).json({ message: "Error adding professor", error });
    }
});

// Route to get all professors
router.get("/professors", async (req, res) => {
    try {
        const professors = await Professor.find().select("-password"); // Exclude password from response
        res.json(professors);
    } catch (error) {
        res.status(500).json({ message: "Error fetching professors", error });
    }
});

module.exports = router;
