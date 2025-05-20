const sequelize = require("../DB/conn");
const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      senha_hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipo: {
        type: DataTypes.ENUM("admin", "cliente", "funcionario"),
        allowNull: false,
      },
    },
    {
      createdAt: "criado_em",
      updatedAt: "atualizado_em",
    }
  );

  return User;
};

// - `id`, `nome`, `email`, `senha_hash`, `tipo`, `criado_em`
