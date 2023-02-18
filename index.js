const bodyParser = require("body-parser");
const Express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./backend/models/db");

const PORT = process.env.SERVER_PORT;

const app = Express();
app.use(cors());
app.use(bodyParser.json());

const errorHandler = (err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ message: "unauthorized" });
  }
  console.log("general error");
  return res.status(500).json({ message: "general error" });
  next();
};

const api = require("./backend/routes/apiRoutes");
app.use("/api", api);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
