const putReservaService = require("../../Services/reserva/putReservaService");

async function putReservaController(req, res) {
  const { usuario_id, servico_id, horario_id, status } = req.body;
  const { id } = req.params;

  try {
    const reservaService = new putReservaService();
    const reserva = await reservaService.putReserva(
      id,
      usuario_id,
      servico_id,
      horario_id,
      status
    );

    if (!reserva) {
      return res.status(404).json({ message: "Reserva não atualizada!" });
    }

    return res
      .status(200)
      .json({ message: "Reserva atualizada com sucesso!", reserva });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
module.exports = putReservaController;
