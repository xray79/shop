const express = require("express");
const router = express.Router();
require("dotenv").config();
const { expressjwt: expressJwt } = require("express-jwt");

const {
  controlGetAll,
  controlGetOne,
  controlAdd,
  controlUpdate,
  controlDelete,
} = require("../controllers/productController");

// Product crud routes
router.get(
  "/getAll",
  expressJwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  controlGetAll
);

router.get("/getOne/:id", controlGetOne);

router.post("/addProduct", controlAdd);

router.patch("/updateProduct", controlUpdate);

router.delete("/removeProduct", controlDelete);

module.exports = router;
