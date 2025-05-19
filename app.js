const express = require("express");
const { DataTypes } = require("sequelize");
const sequelize = require("./DB/conn"); // sua conexão com o banco
const reservaModel = require("./Model/reservaModel");
const routes = require("./Routes/routes");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/", routes);

const PORT = process.env.PORT || 3000;

// Teste de conexão
sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado com o Banco de dados");

    // Inicia o servidor só após conexão bem-sucedida
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => console.error("Erro ao conectar com o banco: ", err));

const Hours = require("./Model/hoursModel")(sequelize, DataTypes);
const Reserva = require("./Model/reservaModel")(sequelize, DataTypes);
const Service = require("./Model/serviceModel")(sequelize, DataTypes);
const User = require("./Model/userModel")(sequelize, DataTypes);

// Sincroniza as tabelas
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Tabelas sincronizadas!");
  })
  .catch((err) => {
    console.log("Erro ao sincronizar com o banco: ", err);
  });

// Só para teste: ver se o model foi importado como função
