const getReservaService = require("../../Services/reserva/getReservaService");

async function getReservaController(req, res) {
  if (req.user.tipo !== "admin") {
    return res
      .status(403)
      .json({ message: "Acesso negado: somente administradores!" });
  }
  try {
    const reservaService = new getReservaService();
    const reserva = await reservaService.getReserva();

    console.log(reserva);

    if (!reserva) {
      return res.status(404).json({ message: "Reserva não encontrada" });
    }

    return res.status(200).json({ reserva });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
module.exports = getReservaController;
