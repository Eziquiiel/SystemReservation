const putHourService = require("../../Services/hour/putHourService");

async function puthourController(req, res) {
  if (req.user.tipo !== "admin") {
    return res
      .status(403)
      .json({ message: "Acesso negado: somente administradores" });
  }
  const { data, hora_inicio, hora_fim, disponivel } = req.body;
  const { id } = req.params;

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

  try {
    const hour = new putHourService();
    const hours = await hour.putHour(
      id,
      data,
      hora_inicio,
      hora_fim,
      disponivel
    );

    if (!hours) {
      return res.status(404).json({ message: "Não foi possivel atualizar" });
    }

    return res.status(200).json({ message: "Atualizado com sucesso!", hours });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
module.exports = puthourController;
