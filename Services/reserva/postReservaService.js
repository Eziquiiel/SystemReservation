const sequelize = require("../../DB/conn");
const { DataTypes } = require("sequelize");
const reservaModel = require("../../Model/reservaModel")(sequelize, DataTypes);
const userModel = require("../../Model/userModel");

class postReservaService {
  constructor(usuario_id, servico_id, horario_id, status) {
    (this.usuario_id = usuario_id),
      (this.servico_id = servico_id),
      (this.horario_id = horario_id),
      (this.status = status);
  }
  async postReserva(usuario_id, servico_id, horario_id, status) {
    const reserva = await reservaModel.create({
      usuario_id,
      servico_id,
      horario_id,
      status,
    });

    return reserva;
  }
}
module.exports = postReservaService;
