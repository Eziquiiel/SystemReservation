const bcrypt = require("bcrypt");
const sequelize = require("../../DB/conn");
const { DataTypes } = require("sequelize");
const User = require("../../Model/userModel")(sequelize, DataTypes);
const jwt = require("jsonwebtoken");
require("dotenv").config();

class loginServices {
  constructor(email, senha_hash) {
    (this.email = email), (this.senha_hash = senha_hash);
  }

  async searchEmail() {
    const user = await User.findOne({ where: { email: this.email } });

    return user;
  }

  async hash(usuario) {
    const validationHash = await bcrypt.compare(
      this.senha_hash,
      usuario.senha_hash
    );

    return validationHash;
  }

  token(usuario) {
    const SECRET = process.env.SECRET;
    const token = jwt.sign(
      {
        id: usuario.id,
        tipo: usuario.tipo,
      },
      SECRET
    );

    if (!token) {
      return null;
    }

    return token;
  }

  async authLogin() {
    const user = await this.searchEmail();
    if (!user) {
      return { error: "Usuário não encontrado!" };
    }

    const hash = await this.hash(user);
    if (!hash) {
      return { error: "Senha inválida" };
    }

    const token = await this.token(user);

    console.log(token);

    return {
      token,
      user1: { id: user.id, email: user.email, tipo: user.tipo },
    };
  }
}

module.exports = loginServices;
