const Sequelize = require("sequelize");
const config = require("../config/dbconfig")

const dbName = config.database;
const dbUser = config.username;
const dbPassword = config.password;
const dbHost = config.host;
const dbDriver = config.dialect;

const db = new Sequelize(
  dbName,
  dbUser,
  dbPassword,
  {
    host: dbHost,
    dialect: dbDriver,
    logging: false
  }
);

module.exports = db;
