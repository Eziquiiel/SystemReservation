const sequelize = require("../../DB/conn");
const { DataTypes } = require("sequelize");
const serviceModel = require("../../Model/serviceModel")(sequelize, DataTypes);

class getService {
  async service() {
    const servico = await serviceModel.findAll();
    if (!servico) {
      return null;
    }

    return servico;
  }
}
module.exports = getService;
