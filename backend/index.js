const Express = require("express");
const app = Express();
require("dotenv").config();

const PORT = process.env.SERVER_PORT;

const api = require("./routes/apiRoutes");
app.use("/api", api);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
