const express = require("express");
const router = express.Router();
require("dotenv").config();
const { expressjwt: expressJwt } = require("express-jwt");

const { controlPay } = require("../controllers/paymentController");

router.post(
  "/pay",
  expressJwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  controlPay
);

module.exports = router;
