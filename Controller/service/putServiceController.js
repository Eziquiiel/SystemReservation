const putService = require("../../Services/service/putService");

async function putServicecontroller(req, res) {
  if (req.user.tipo !== "admin") {
    return res
      .status(403)
      .json({ message: "Acesso negado: somente administradores!" });
  }
  const { nome, descricao, duracao_minutos, preco } = req.body;
  const { id } = req.params;

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
    const services = new putService();
    const servico = await services.service(
      id,
      nome,
      descricao,
      duracao_minutos,
      preco
    );

    console.log(servico);

    if (!servico) {
      return res
        .status(404)
        .json({ message: "Não foi possivel atualizar os dados!" });
    }

    return res
      .status(200)
      .json({ message: "Dados atualizados com sucesso!", servico });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
module.exports = putServicecontroller;
