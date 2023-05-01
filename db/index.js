const Sequelize = require("sequelize");
require("dotenv").config();

const dbName = process.env.database;
const dbUser = process.env.username;
const dbPassword = process.env.password;
const dbHost = process.env.host;
const dbDriver = process.env.dialect; //checkear

const db = new Sequelize(
  dbName,
  dbUser,
  dbPassword,
  {
    host: dbHost,
    dialect: process.env.DB_DIALECT,
    loggin: false,
  }
);

module.exports = db;
