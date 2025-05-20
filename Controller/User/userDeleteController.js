const deleteService = require("../../Services/user/userDeleteService");

async function deleteController(req, res) {
  if (req.user.tipo !== "admin") {
    return res
      .status(403)
      .json({ message: "Acesso negado: somente administradores." });
  }

  const { id } = req.params;

  if (!id) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  try {
    const user = new deleteService();
    const deleteUser = await user.userDelete(id);

    console.log(deleteUser);

    if (!deleteUser) {
      return res.status(404).json({ message: "Usuário não encontrado!" });
    }

    return res
      .status(200)
      .json({ message: "Usuário apagado com sucesso!", deleteUser });
  } catch (error) {
    return res.status(405).json({ error });
  }
}
module.exports = deleteController;
