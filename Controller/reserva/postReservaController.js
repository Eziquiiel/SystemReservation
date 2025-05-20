const postReservaService = require("../../Services/reserva/postReservaService");

async function postReservaController(req, res) {
  const { usuario_id, servico_id, horario_id, status } = req.body;

  if (!usuario_id) {
    return res
      .status(422)
      .json({ message: "O campo usuario_id é Obrigatório!" });
  }

  if (!servico_id) {
    return res
      .status(422)
      .json({ message: "O campo servico_id é Obrigatório!" });
  }

  if (!horario_id) {
    return res
      .status(422)
      .json({ message: "O campo horario_id é Obrigatório!" });
  }

  if (!status) {
    return res.status(422).json({ message: "O campo status é Obrigatório!" });
  }

  try {
    const reservaService = new postReservaService();
    const reserva = await reservaService.postReserva(
      usuario_id,
      servico_id,
      horario_id,
      status
    );

    if (!reserva) {
      return res.status(500).json({ message: "Não há reserva no momento!" });
    }

    return res
      .status(200)
      .json({ message: "Reserva feita com sucesso!", reserva });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
module.exports = postReservaController;
