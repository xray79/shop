const express = require("express");
const router = express.Router();
const Product = require("../models/productSchema");

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

module.exports = router;