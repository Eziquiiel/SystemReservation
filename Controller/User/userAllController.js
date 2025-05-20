const { DataTypes } = require("sequelize");
const sequelize = require("../../DB/conn");
const userAllService = require("../../Services/User/userAllService");
const users = require("../../Model/userModel")(sequelize, DataTypes);

async function userAllController(req, res) {
  if (req.user.tipo !== "admin") {
    return res
      .status(403)
      .json({ message: "Acesso negado: somente administradores." });
  }
  try {
    const userService = new userAllService();

    const userAll = await userService.verifyEmail();

    if (!userAll) {
      return res.status(404).json({ message: "Nenhum usuário encontrado!" });
    }

    return res.status(200).json(userAll);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}

module.exports = userAllController;
