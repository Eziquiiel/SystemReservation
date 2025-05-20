const sequelize = require("../../DB/conn");
const { DataTypes } = require("sequelize");
const serviceModel = require("../../Model/serviceModel")(sequelize, DataTypes);

class createService {
  constructor(nome, descricao, duracao_minutos, preco) {
    (this.nome = nome),
      (this.descricao = descricao),
      (this.duracao_min = duracao_minutos),
      (this.preco = preco);
  }
  async service(nome, descricao, duracao_minutos, preco) {
    const servico = await serviceModel.create({
      nome,
      descricao,
      duracao_minutos,
      preco,
    });

    return servico;
  }
}

module.exports = createService;
