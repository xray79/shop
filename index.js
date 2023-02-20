const Express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./backend/models/db");

const PORT = process.env.SERVER_PORT;

// Initialise app, use resource sharing, use JSON
const app = Express();
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use("/api", require("./backend/routes/productRoutes"));
app.use("/api", require("./backend/routes/loginRoutes"));

// Error handler
app.use(require("./backend/middleware/errorHandler"));

// Start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
