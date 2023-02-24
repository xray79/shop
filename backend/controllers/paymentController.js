const express = require("express");
require("dotenv").config();

// controllers for product crud operations
const controlPay = async (req, res) => {
  res.json({ message: "working" });
};

module.exports = {
  controlPay,
};
