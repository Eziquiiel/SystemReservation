const { DataTypes } = require("sequelize");
const sequelize = require("../DB/conn");
const reservaModel = require("./reservaModel")(sequelize, DataTypes);

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

  Hours.hasMany(reservaModel, { foreignKey: "horario_id" });

  return Hours;
};
