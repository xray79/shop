const express = require("express");
require("dotenv").config();

// controllers for product crud operations
const controlPay = async (req, res) => {
  let total = 0;
  req.body.forEach((i) => {
    total += i.quantity * i.price;
  });
  console.log("Total: ", total);
  res.json({ message: "working" });
};

module.exports = {
  controlPay,
};
