const { DataTypes } = require("sequelize");
const sequelize = require("../DB/conn");
const reservaModel = require("./reservaModel")(sequelize, DataTypes);

module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define("Service", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duracao_minutos: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    preco: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  });

  Service.hasMany(reservaModel, { foreignKey: "servico_id" });

  return Service;
};
