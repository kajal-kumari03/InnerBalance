const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");
require("dotenv").config();

const router = express.Router();

// Allowed roles
const ALLOWED_ROLES = ["admin", "client", "professor"];

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    // Validate role
    if (!ALLOWED_ROLES.includes(role)) {
      return res.status(400).json({ msg: "Invalid role. Allowed roles: admin, client, professor" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    user = new User({ name, email, password: hashedPassword, role });
    await user.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login Route
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password , role } = req.body;

//     // Check if user exists
//     let user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ msg: "Invalid credentials" });

//     // Compare passwords
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

//     // Generate JWT Token with role
//     const token = jwt.sign({ id: user._id, role: user.role }, { expiresIn: "1h" });

//     res.json({ token, role: user.role });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

router.post("/login", async (req, res) => {
  const { email, password , role } = req.body;
  try {
    //step - 1 -> check is the users is present into the database or not
    const existUser = await User.findOne({ email: email });

    if (!existUser) {
      return res.status(400).json({
        message: "this email is not registerd try to register yourself first ",
      });
    }
    const hasedPassoword = existUser.password;
    bcrypt.compare(password, hasedPassoword, (err, result) => {
      if (err) console.log(err);
      if (result) {
        //if email or password both are correct in that what we have do
        // what we are goint to do is we send a token
        // we are goint to use jsonwebtoken
        // we have to generate a token

        const paylod = { email: existUser.email, id: existUser._id };
        //payload what we want to store inside the token
        // secret key
        jwt.sign(paylod, "masai", { expiresIn: "1h" }, (err, token) => {
          if (err) console.log(err);
          res.status(200).json({ token: token });
        });
      } else {
        res.status(400).json({
          message: "check your password your password is not correct'",
        });
      }
    });
    // bcrypt.compare(password,)

    //at this line user is correct
  } catch (err) {
    res.status(500).send(err.message);
  }
});
module.exports = router;
