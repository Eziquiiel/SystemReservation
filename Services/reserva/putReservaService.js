const { Reserva } = require("../../Model/associateModels");

class putReservaService {
  constructor(id, usuario_id, servico_id, horario_id, status) {
    (this.id = id),
      (this.usuario_id = usuario_id),
      (this.servico_id = servico_id),
      (this.horario_id = horario_id),
      (this.status = status);
  }
  async putReserva(id, usuario_id, servico_id, horario_id, status) {
    const dados = {
      usuario_id,
      servico_id,
      horario_id,
      status,
    };

    const reserva = await Reserva.update(dados, { where: { id } });

    return reserva;
  }
}
module.exports = putReservaService;
