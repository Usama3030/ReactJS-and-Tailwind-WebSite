require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const mongoose = require("./db/db");

app.use(cors());

app.use(bodyParser.json());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api", userRoutes);

app.listen(process.env.PORT, () => {
  //   console.log(`Server is running on port ${port}`);
  console.log(`Server is running`);
});
