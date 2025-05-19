const authService = require("../../Services/auth/authServices");

async function authController(req, res) {
  const { nome, email, senha_hash, tipo } = req.body;

  if (!nome) {
    return res.status(422).json({ message: "O campo nome é obrigatório!" });
  }

  if (!email) {
    return res.status(422).json({ message: "O campo email é obrigatório!" });
  }

  if (!senha_hash) {
    return res.status(422).json({ message: "O campo senha é obrigatório!" });
  }

  if (!tipo) {
    return res.status(422).json({ message: "O campo tipo é obrigatório!" });
  }

  try {
    const auth = await authService(nome, email, senha_hash, tipo);

    console.log(auth);

    if (!auth) {
      return res.status(404).json({ msg: "usuário não encontrado!" });
    }

    return res.status(200).json({ message: "Usuário criado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = authController;
