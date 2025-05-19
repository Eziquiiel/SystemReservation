const { Sequelize, DataTypes } = require("sequelize");

require("dotenv").config();

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASS;
const Host = process.env.Host;

const sequelize = new Sequelize(db_name, db_user, db_password, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
