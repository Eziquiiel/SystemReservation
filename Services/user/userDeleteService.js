const sequelize = require("../../DB/conn");
const { DataTypes } = require("sequelize");

const user = require("../../Model/userModel")(sequelize, DataTypes);

class deleteService {
  constructor(id) {
    this.id = id;
  }
  async userDelete(id) {
    const User = await user.findOne({ where: { id } });

    if (!User) {
      return;
    }

    const userData = User;

    const validation = await User.destroy({ where: { id } });

    if (!validation) {
      return;
    }

    return validation, userData;
  }
}
module.exports = deleteService;
