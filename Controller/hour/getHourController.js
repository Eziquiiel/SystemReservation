const getHourService = require("../../Services/hour/getHourService");

async function getHourController(req, res) {
  try {
    const hour = new getHourService();
    const hours = await hour.getHour();

    if (!hours) {
      return res.status(404).json({ message: "Horário não disponível" });
    }

    return res.status(200).json({ hours });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
module.exports = getHourController;
