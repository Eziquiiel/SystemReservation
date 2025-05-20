const sequelize = require("../../DB/conn");
const { DataTypes } = require("sequelize");
const hour = require("../../Model/hoursModel")(sequelize, DataTypes);

class putHourService {
  constructor(id, data, hora_inicio, hora_fim, disponivel) {
    (this.data = data),
      (this.hora_inicio = hora_inicio),
      (this.hora_fim = hora_fim),
      (this.disponivel = disponivel);
    this.id = id;
  }
  async putHour(id, data, hora_inicio, hora_fim, disponivel) {
    const dados = {
      data,
      hora_inicio,
      hora_fim,
      disponivel,
    };
    const hours = await hour.update(dados, {
      where: { id },
    });

    return hours, dados;
  }
}
module.exports = putHourService;
