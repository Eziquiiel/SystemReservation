const sequelize = require("../../DB/conn");
const { DataTypes } = require("sequelize");
const serviceModel = require("../../Model/serviceModel")(sequelize, DataTypes);

class deleteService {
  constructor(id) {
    this.id = id;
  }

  async delete(id) {
    const serviceId = await serviceModel.findOne({ where: { id } });

    if (!serviceId) {
      return null;
    }

    const userData = serviceId;

    const service = await serviceId.destroy(id);

    return service, userData;
  }
}
module.exports = deleteService;
