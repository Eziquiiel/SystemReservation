const loginService = require("../../Services/auth/loginServices");

async function loginController(req, res) {
  const { email, senha_hash } = req.body;

  if (!email) {
    return res.status(422).json({ message: "O campo email é obrigatório!" });
  }

  if (!senha_hash) {
    return res.status(422).json({ message: "O campo senha é obrigatório!" });
  }

  try {
    const service = new loginService(email, senha_hash);

    const result = service.authLogin();
    console.log(result.token);
    if (result.error) {
      return res.status(401).json({ message: result.error });
    }

    return res.status(200).json({
      message: "Login realizado com sucesso!",
      token: result.token,
      user: result.email,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

module.exports = loginController;
