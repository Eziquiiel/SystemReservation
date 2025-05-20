const sequelize = require("../../DB/conn");
const { DataTypes } = require("sequelize");
const serviceModel = require("../../Model/serviceModel")(sequelize, DataTypes);

class putService {
  constructor(id, nome, descricao, duracao_minutos, preco) {
    (this.id = id),
      (this.nome = nome),
      (this.descricao = descricao),
      (this.duracao_minutos = duracao_minutos),
      (this.preco = preco);
  }

  async service(id, nome, descricao, duracao_minutos, preco) {
    const dados = {
      nome,
      descricao,
      duracao_minutos,
      preco,
    };
    const updateService = await serviceModel.update(dados, {
      where: { id },
    });

    return updateService, dados;
  }
}
module.exports = putService;
