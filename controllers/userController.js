require("dotenv").config();
const User = require("../models/users");
const Business = require("../models/business");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const _ = require("lodash");

// Generate a random secret key for JWT signing
const tokenSecretKey = crypto.randomBytes(64).toString("hex");

// const mailgunApiKey = process.env.MAILGUN_API_KEY;
// const mailgunDomain = process.env.MAILGUN_DOMAIN;
// const local_URL = process.env.LOCALHOST_URL;

// const mailgun = require("mailgun-js")({
//   apiKey: mailgunApiKey,
//   domain: mailgunDomain,
// });

// //3. cofigure mail and send it
// const sendVerifyEmail = async (name, email, _id) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: "587",
//       secure: false,
//       requireTLS: true,
//       auth: {
//         user: "email in env",
//         pass: "password in env",
//       },
//     });

//     //2.configure email content.
//     const mailOptions = {
//       from: "email in env",
//       to: email,
//       subject: "For Email Verification",
//       html:
//         "<p>Hi " +
//         name +
//         ',</br>please click here to <a href="http://localhost:80/api/verify?id=' +
//         _id +
//         '">verify</a> your email.</p>',
//     };
//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Email has been sent", info.response);
//       }
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// // register api
// exports.registerUser = async (req, res) => {
//   try {
//     const { name, email, password, business, roles } = req.body;

//     const businessObj = await Business.findOne({ name: business });
//     if (!businessObj) {
//       return res.status(406).json({ error: "Business not found" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//       businesses: [
//         {
//           business: businessObj._id,
//           roles,
//         },
//       ],
//     });
//     const savedUser = await newUser.save();

//     sendVerifyEmail(savedUser.name, savedUser.email, savedUser._id);
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // login api

// exports.loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     if (!user.isVerified) {
//       return res.status(401).json({ error: "User is not verified" });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//       return res.status(401).json({ error: "Invalid password" });
//     }

//     const loginToken = jwt.sign({ user_id: user._id }, tokenSecretKey);

//     const userDetails = {
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       role: _.flatten(user.businesses.map((business) => business.roles)),
//       token: loginToken,
//     };

//     res.status(200).json({ message: "Login successful", user: userDetails });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// exports.verifyNow = async (req, res) => {
//   try {
//     console.log("id", req.query.id);
//     const updateInfo = await User.updateOne(
//       { _id: req.query.id },
//       { $set: { isVerified: true } }
//     );
//     console.log("updateUser", updateInfo);
//     if (updateInfo.nModified == 0) {
//       console.log("No documents were updated");
//     }
//     res.status(201).json({ message: "User verified successfully" });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

//3. cofigure mail and send it
const sendVerifyEmail = async (name, email, _id) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: "587",
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    //2.configure email content.
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "For Email Verification",
      html:
        "<p>Hi " +
        name +
        ',</br>please click here to <a href="' +
        process.env.VERIFY_URL +
        _id +
        '">verify</a> your email.</p>',
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        // console.log("Email has been sent", info.response);
        // console.log("Email has been sent");
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

// register api
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, business, roles } = req.body;

    const businessObj = await Business.findOne({ name: business });
    if (!businessObj) {
      return res.status(406).json({ error: "Business not found" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      businesses: [
        {
          business: businessObj._id,
          roles,
        },
      ],
    });
    const savedUser = await newUser.save();

    sendVerifyEmail(savedUser.name, savedUser.email, savedUser._id);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// login api

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!user.isVerified) {
      return res.status(401).json({ error: "User is not verified" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const loginToken = jwt.sign({ user_id: user._id }, tokenSecretKey);

    const userDetails = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: _.flatten(user.businesses.map((business) => business.roles)),
      token: loginToken,
    };

    res.status(200).json({ message: "Login successful", user: userDetails });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.verifyNow = async (req, res) => {
  try {
    const updateInfo = await User.updateOne(
      { _id: req.query.id },
      { $set: { isVerified: true } }
    );
    if (updateInfo.nModified == 0) {
      // console.log("No documents were updated");
    }
    res.status(201).json({ message: "User verified successfully" });
  } catch (error) {
    // console.log(error.message);
  }
};
