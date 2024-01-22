require("dotenv").config();
const User = require("../models/users");
const mongoose = require("mongoose");

// register api
exports.registerUser = async (req, res) => {
  try {
    const { name, email, organization, role } = req.body;

    const newUser = new User({
      name,
      email,
      role,
      organization,
    });
    const savedUser = await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
