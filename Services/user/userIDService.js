const sequelize = require("../../DB/conn");
const { DataTypes } = require("sequelize");
const user = require("../../Model/userModel")(sequelize, DataTypes);

class userIdService {
  constructor(id) {
    this.id = id;
  }

  async verifyEmail(id) {
    const validation = await user.findByPk(id);

    if (!validation) {
      return;
    }

    console.log(validation);

    return validation;
  }
}

module.exports = userIdService;
