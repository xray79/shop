const express = require("express");
const router = express.Router();
require("dotenv").config();

const { controlPay } = require("../controllers/paymentController");

// Login and signup routes
router.post("/pay", controlPay);

module.exports = router;
