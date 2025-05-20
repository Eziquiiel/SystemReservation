const getService = require("../../Services/service/getService");

async function getServiceController(req, res) {
  try {
    const services = new getService();
    const servico = await services.service();

    console.log(servico);
    if (!servico) {
      return res.status(404).json({ message: "Serviços não encontrado!" });
    }

    return res.status(200).json(servico);
  } catch (error) {
    return res.status(500).json({ error });
  }
}
module.exports = getServiceController;
