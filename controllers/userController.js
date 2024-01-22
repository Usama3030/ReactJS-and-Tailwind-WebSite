const User = require("../models/users");

// register api
exports.registerUser = async (req, res) => {
  try {
    const { name, email, organization, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

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
