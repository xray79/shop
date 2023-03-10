const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
require("./backend/models/db");

// env variables
const PORT = process.env.SERVER_PORT;
const NODE_ENV = process.env.NODE_ENV;

// Initialise app, use resource sharing, use JSON
const app = express();
app.use(cors());
app.use(bodyParser.json());

// serve frontend on production
if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend", "dist")));
  app.get("/", (_, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
}

// API Routes
app.use("/api", require("./backend/routes/productRoutes"));
app.use("/api", require("./backend/routes/loginRoutes"));
app.use("/api", require("./backend/routes/paymentRoutes"));

// Error handler
app.use(require("./backend/middleware/errorHandler"));

// Start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
