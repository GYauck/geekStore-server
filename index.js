const express = require("express");
const app = express();
const db = require("./db");
const models = require("./models");
const routes = require("./routes");
const path = require("path");
//const cookieParser = require("cookie-parser")
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

// Express Routing
app.use("/api", routes);

db.sync({ force: false }).then(function () {
  console.log("Database Connected");
  app.listen(process.env.PORT, () => {
    console.log("Server listening at port 8080");
  });
});
