const bodyParser = require("body-parser");
const Express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./backend/models/db");

const PORT = process.env.SERVER_PORT;

const app = Express();
app.use(cors());
app.use(bodyParser.json());

const api = require("./backend/routes/apiRoutes");
app.use("/api", api);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
