const Sequelize = require("sequelize");
require("dotenv").config();

//this will help to protect your password and some sensible information
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;

//this file is resualable for another exercise
