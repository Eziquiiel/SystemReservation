const sequelize = require("../../DB/conn");
const { DataTypes } = require("sequelize");
const user = require("../../Model/userModel")(sequelize, DataTypes);

class userAllService {
  async verifyEmail() {
    const validation = await user.findAll();

    if (!validation) {
      return validation;
    }

    return validation;
  }
}

module.exports = userAllService;
