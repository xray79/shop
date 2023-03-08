const express = require("express");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

// controllers for login and signup
const controlLogin = async (req, res) => {
  const data = req.body;

  // verify a user exists
  const mongooseResponse = await User.findOne({ email: data.email });
  if (!mongooseResponse) {
    res.json({ message: "no user found" });
    return;
  }

  // verify passwords match
  const isMatch = await bcrypt.compare(
    data.password,
    mongooseResponse.password
  );
  if (mongooseResponse.email !== data.email || !isMatch) {
    res.json({ message: "incorrect username or password" });
    return;
  }

  // send token
  const token = jwt.sign({ sub: mongooseResponse._id }, process.env.SECRET, {
    expiresIn: "30d",
  });

  // send successful response
  res.json({
    message: "login successful",
    token,
  });
};

const controlSignup = async (req, res) => {
  const data = req.body;
  // data shape {
  // userEmail: string,
  // userPassword: String,
  // userPasswordConfirm: string
  // }

  // verify data
  if (data.userPassword.length < 6)
    return res.json({ message: "password too short" });

  const isRegistered = await User.findOne({ email: data.userEmail });
  if (isRegistered) return res.json({ message: "user already registered" });

  // hash password with bcrypt
  const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
  const hashedPassword = await bcrypt.hash(data.userPassword, salt);

  // create user
  const isCreated = await User.create({
    email: data.userEmail,
    password: hashedPassword,
  });

  if (isCreated)
    res.json({
      message: "signup successful",
    });

  res.status(500).json({ message: "An internal error occured" });
};

module.exports = { controlLogin, controlSignup };
