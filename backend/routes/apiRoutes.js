const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "hello world" });
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send({ message: "post request" });
});

router.put("/", (req, res) => {
  console.log(req.body);
  res.send({ message: "put request" });
});

router.delete("/", (req, res) => {
  res.send({ message: "hello world" });
});

module.exports = router;
