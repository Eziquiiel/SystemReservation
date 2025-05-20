const sequelize = require("../../DB/conn");
const { DataTypes } = require("sequelize");
const hourService = require("../../Model/hoursModel")(sequelize, DataTypes);

class getHourService {
  async getHour() {
    const hour = await hourService.findAll();

    if (!hour) {
      return null;
    }

    return hour;
  }
}

module.exports = getHourService;
