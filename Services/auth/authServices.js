const bcrypt = require("bcrypt");
const sequelize = require("../../DB/conn");
const { DataTypes } = require("sequelize");
const User = require("../../Model/userModel")(sequelize, DataTypes);

class authServices {
  constructor(nome, email, senha_hash, tipo) {
    (this.nome = nome),
      (this.email = email),
      (this.senha_hash = senha_hash),
      (this.tipo = tipo);
  }
  async services(nome, email, senha_hash, tipo) {
    const validation = await User.findOne({ where: { email: email } });
    console.log(validation);

    if (validation) {
      throw new Error("Email já cadastrado");
    }

    const salt = await bcrypt.genSalt(12);
    const password = await bcrypt.hash(senha_hash, salt);

    return await User.create({
      nome: nome,
      email: email,
      senha_hash: password,
      tipo: tipo,
    });
  }
}

module.exports = authServices;
