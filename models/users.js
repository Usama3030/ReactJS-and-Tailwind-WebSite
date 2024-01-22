const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  organization: { type: String },
  role: { type: String },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
