const {
  User,
  Reserva,
  Service,
  Hours,
} = require("../../Model/associateModels");

class getReservaService {
  async getReserva() {
    const reservaService = await Reserva.findAll({
      include: [
        { model: User, attributes: ["nome"] },
        { model: Service, attributes: ["descricao"] },
        { model: Hours, attributes: ["hora_inicio"] },
      ],
    });

    return reservaService;
  }
}
module.exports = getReservaService;
