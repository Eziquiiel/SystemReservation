const postHourService = require("../../Services/hour/postHourService");

async function postHourController(req, res) {
  if (req.user.tipo !== "admin") {
    return res
      .status(403)
      .json({ message: "Acesso negado: somente administradores!" });
  }
  const { data, hora_inicio, hora_fim, disponivel } = req.body;

  if (!data) {
    return res.status(422).json({ message: "O campo data é obrigatório!" });
  }
  if (!hora_inicio) {
    return res
      .status(422)
      .json({ message: "O campo hora de inicio é obrigatório!" });
  }
  if (!hora_fim) {
    return res
      .status(422)
      .json({ message: "O campo hora final é obrigatório!" });
  }
  if (!disponivel) {
    return res
      .status(422)
      .json({ message: "O campo disponivel é obrigatório!" });
  }

  try {
    const hourController = new postHourService();
    const hours = hourController.hour(data, hora_inicio, hora_fim, disponivel);

    if (!hours) {
      return res.status(404).json({ message: "Dados não encontrado!" });
    }

    return res
      .status(200)
      .json({ message: "Horário criado com sucesso!", hours });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
module.exports = postHourController;
