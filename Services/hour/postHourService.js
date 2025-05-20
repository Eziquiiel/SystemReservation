const sequelize = require("../../DB/conn");
const { DataTypes } = require("sequelize");
const hours = require("../../Model/hoursModel")(sequelize, DataTypes);

class postHourService {
  constructor(data, hora_inicio, hora_fim, disponivel) {
    (this.data = data),
      (this.hora_inicio = hora_inicio),
      (this.hora_fim = hora_fim);
    this.disponivel = disponivel;
  }
  async hour(data, hora_inicio, hora_fim, disponivel) {
    const dataHour = await hours.create({
      data,
      hora_inicio,
      hora_fim,
      disponivel,
    });

    return dataHour;
  }
}
module.exports = postHourService;
