const createService = require("../../Services/service/createService");

async function createServiceController(req, res) {
  if (req.user.tipo !== "admin") {
    return res
      .status(403)
      .json({ message: "Acesso negado: somente administradores" });
  }
  const { nome, descricao, duracao_minutos, preco } = req.body;

  if (!nome) {
    return res.status(422).json({ message: "O campo nome é obrigatório!" });
  }
  if (!descricao) {
    return res
      .status(422)
      .json({ message: "O campo descrição é obrigatório!" });
  }
  if (!duracao_minutos) {
    return res.status(422).json({ message: "O campo tempo é obrigatório!" });
  }
  if (!preco) {
    return res.status(422).json({ message: "O campo preço é obrigatório!" });
  }

  try {
    const servico = new createService();
    const servicos = servico.service(nome, descricao, duracao_minutos, preco);

    if (!servicos) {
      return res.status(404).json({ message: "Serviço não foi criado!" });
    }

    return res
      .status(200)
      .json({ message: "Serviço criado com sucesso!", servicos });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = createServiceController;
