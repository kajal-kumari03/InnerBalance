const express = require("express");
const Professor = require("../models/professor");

const router = express.Router();

// Route to add a professor
router.post("/add-professor", async (req, res) => {
    try {
        const { name, age, phoneNumber, whatsappNumber, education, experience, address } = req.body;

        if (!name || !age || !phoneNumber || !education || !experience || !address) {
            return res.status(400).json({ message: "Please provide all required details." });
        }

        const professor = new Professor({
            name,
            age,
            phoneNumber,
            whatsappNumber: whatsappNumber || phoneNumber,
            education,
            experience,
            address
        });

        await professor.save();
        res.status(201).json({ message: "Professor added successfully", professor });
    } catch (error) {
        res.status(500).json({ message: "Error adding professor", error });
    }
});

// Route to get all professors
router.get("/professors", async (req, res) => {
    try {
        const professors = await Professor.find();
        res.json(professors);
    } catch (error) {
        res.status(500).json({ message: "Error fetching professors", error });
    }
});

module.exports = router;
