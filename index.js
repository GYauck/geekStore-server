const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const db = require("./db");
const models = require("./models");
const routes = require("./routes");
const corsConfig = require("./config/cors")

const cookieParser = require("cookie-parser");
const setHeaders = require("./middleware/setHeaders");

require("dotenv").config();
app.use(cookieParser())
app.use(express.json());
app.use("/", setHeaders)
app.use(cors(corsConfig));

// Express Routing
app.use("/api", routes);

db.sync({ force: false }).then(function () {
  console.log("Database Connected");
  app.listen(process.env.PORT, () => {
    console.log("Server listening at port 8080");
  });
});
