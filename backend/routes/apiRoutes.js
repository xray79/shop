const express = require("express");
const router = express.Router();
require("dotenv").config();
const bcrypt = require("bcrypt");
const Product = require("../models/productSchema");
const User = require("../models/userSchema");

// Product crud operation handlers

router.get("/getAll", async (req, res) => {
  const allProducts = await Product.find({});
  res.json(allProducts);
});

router.get("/getOne/:id", async (req, res) => {
  const product = await Product.find({ id: req.params.id });
  res.json(product);
});

router.post("/addProduct", (req, res) => {
  console.log(req.body);
  res.send({ message: "post request" });
});

router.patch("/updateProduct", (req, res) => {
  console.log(req.body);
  res.send({ message: "put request" });
});

router.delete("/removeProduct", (req, res) => {
  res.send({ message: "hello world" });
});

// Login and signup handlers

router.post("/login", async (req, res) => {
  const data = req.body;

  // verify a user exists
  const mongooseResponse = await User.find({ email: data.userEmail });
  if (!mongooseResponse[0]) {
    res.json({ message: "no user found" });
    return;
  }

  // verify passwords match
  const isMatch = await bcrypt.compare(
    data.userPassword,
    mongooseResponse[0].password
  );
  if (mongooseResponse[0].email !== data.userEmail || !isMatch) {
    res.json({ message: "incorrect username or password" });
    return;
  }

  // send successful response
  res.json({
    message: "login successful",
  });
});

router.post("/signup", async (req, res) => {
  const data = req.body;
  console.log(data);
  // data shape {userEmail: string
  // userPassword: String,
  // userPasswordConfirm: string
  // }

  // sign in with jwt
  // verify data
  if (data.userPassword.length < 6) {
    res.json({ message: "password too short" });
    return;
  }

  // hash password with bcrypt
  console.log(process.env.SALT_ROUNDS);
  const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
  const hashedPassword = await bcrypt.hash(data.userPassword, salt);
  console.log(hashedPassword);

  // send jwt

  // create user
  const mongooseResponse = await User.create({
    email: data.userEmail,
    password: hashedPassword,
  });
  console.log(mongooseResponse);

  res.json({
    message: "signup req recieved",
    email: data.userEmail,
    password: data.userPassword,
    confirmPassword: data.userConfirmPassword,
  });
});

module.exports = router;
