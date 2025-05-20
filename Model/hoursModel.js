const { DataTypes } = require("sequelize");
const sequelize = require("../DB/conn");

module.exports = (sequelize, DataTypes) => {
  const Hours = sequelize.define("Hours", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hora_inicio: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    hora_fim: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    disponivel: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  return Hours;
};
