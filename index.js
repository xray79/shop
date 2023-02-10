const Express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./backend/models/db");

const PORT = process.env.SERVER_PORT;

const app = Express();
app.use(cors());

const api = require("./backend/routes/apiRoutes");
app.use("/api", api);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
