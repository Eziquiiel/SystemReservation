const userIDService = require("../../Services/User/userIDService");

async function userIDController(req, res) {
  const { id } = req.params;

  try {
    const userID = new userIDService();

    const user = await userID.verifyEmail(id);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado!" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ err });
  }
}

module.exports = userIDController;
