const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connect } = require("mongoose");
const { DB, PORT } = require("./config/index");
const { success, error } = require("consola");
const stormRouter = require("./routes/stormRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// TODO Middlewares Jwt
app.use("/api/storms", stormRouter);

//connection db
const startApp = async () => {
  try {
    //connect db}
    await connect(DB);
    success({
      message: "Success",
      badge: true,
    });
    //start listening server
    app.listen(PORT || 8000);
  } catch (err) {
    console.log(err);
    error({
      message: "Error",
      badge: true,
    });
    startApp();
  }
};

startApp();