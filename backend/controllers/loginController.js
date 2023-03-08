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
  // email: string,
  // password: string,
  // confirmPassword: string
  // }

  // verify data
  const valid = await verifyForm(data);
  if (!valid.isValid) {
    return res.json({ message: valid.message });
  }

  // hash password with bcrypt
  const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
  const hashedPassword = await bcrypt.hash(data.password, salt);

  // create user
  const isCreated = await User.create({
    email: data.email,
    password: hashedPassword,
  });

  if (isCreated)
    return res.status(201).json({
      message: "signup successful, redirecting...",
    });

  res.status(500).json({ message: "An internal error occured" });
};

module.exports = { controlLogin, controlSignup };

const verifyForm = async data => {
  // function performs checks to verify if signup form data is valid
  // returns an object with props isValid and message

  const valid = { isValid: true, message: null };

  // check if registered
  const isRegistered = await User.findOne({ email: data.email });
  if (isRegistered) {
    valid.isValid = false;
    valid.message = "user already registered";
    return valid;
  }

  // check passwords match
  if (data.password !== data.confirmPassword) {
    valid.isValid = false;
    valid.message = "passwords do not match";
    return valid;
  }

  // check password length
  if (data.password.length < 6) {
    valid.isValid = false;
    valid.message = "password too short";
    return valid;
  }

  return valid;
};
