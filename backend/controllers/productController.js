const express = require("express");
require("dotenv").config();
const Product = require("../models/productSchema");

// controllers for product crud operations
const controlGetAll = async (req, res) => {
  const allProducts = await Product.find({});
  res.json(allProducts);
};

const controlGetOne = async (req, res) => {
  const product = await Product.find({ id: req.params.id });
  res.json(product);
};

const controlAdd = (req, res) => {
  console.log(req.body);
  res.send({ message: "post request" });
};

const controlUpdate = (req, res) => {
  console.log(req.body);
  res.send({ message: "put request" });
};

const controlDelete = (req, res) => {
  res.send({ message: "hello world" });
};

module.exports = {
  controlGetAll,
  controlGetOne,
  controlAdd,
  controlUpdate,
  controlDelete,
};
