const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((dbObject) => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("error", err);
  });
