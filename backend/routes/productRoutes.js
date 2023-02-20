const express = require("express");
const router = express.Router();
require("dotenv").config();
const { expressjwt: expressJwt } = require("express-jwt");

const {
  controlGetAll,
  controlGetOne,
  controlAddProduct,
  controlUpdate,
  controlDelete,
} = require("../controllers/productsControllers");

// Product crud routes
router.get(
  "/getAll",
  expressJwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  controlGetAll
);

router.get("/getOne/:id", controlGetOne);

router.post("/addProduct", controlAddProduct);

router.patch("/updateProduct", controlUpdate);

router.delete("/removeProduct", controlDelete);

module.exports = router;
