const Express = require("express");
require("dotenv").config();
const db = require("./models/db");

const app = Express();

const PORT = process.env.SERVER_PORT;

const api = require("./routes/apiRoutes");
app.use("/api", api);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
