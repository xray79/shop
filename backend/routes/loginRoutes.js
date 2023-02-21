const express = require("express");
const router = express.Router();
require("dotenv").config();

const {
  controlLogin,
  controlSignup,
} = require("../controllers/loginController");

// Login and signup routes
router.post("/login", controlLogin);

router.post("/signup", controlSignup);

module.exports = router;
