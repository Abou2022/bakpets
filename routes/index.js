//this file will print the welcome message to the localhost
const express = require("express");
const router = express.Router();

//I think call back function

router.get("/", (req, res) => {
  res.send("Welcome to my new application");
});

module.exports = router;
