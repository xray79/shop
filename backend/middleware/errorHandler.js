const errorHandler = (err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ message: "unauthorized" });
  }
  console.log("general error");
  return res.status(500).json({ message: "general error" });
  next();
};

module.exports = errorHandler;
