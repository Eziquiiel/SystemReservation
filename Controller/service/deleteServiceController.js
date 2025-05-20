const deleteService = require("../../Services/service/deleteService");

async function deleteServiceController(req, res) {
  if (req.user.tipo !== "admin") {
    return res
      .status(403)
      .json({ message: "Acesso negado: somente administradores!" });
  }
  const { id } = req.params;

  if (!id) {
    res.status(404).json({ message: "Serviço não encontrado" });
  }

  try {
    const service = new deleteService();
    const services = await service.delete(id);

    if (!services) {
      return res.status(404).json({ message: "Serviço não encontrado!" });
    }

    console.log(services);

    return res
      .status(200)
      .json({ message: "Serviço apagado com sucesso!", services });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
module.exports = deleteServiceController;
