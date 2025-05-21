# Sistema de Reserva

Este é um sistema de reservas desenvolvido com Node.js, Express e MySQL, utilizando Sequelize como ORM. O projeto inclui autenticação com JWT, criptografia de senhas com bcrypt, validação de dados com Yup, e segue a arquitetura com camada de serviços para manter a lógica de negócio separada e organizada.

## 🚀 Funcionalidades

- Cadastro e login de usuários
- Autenticação com tokens JWT
- Criptografia de senhas
- CRUD de reservas
- Verificação de horários disponíveis
- Validação de dados com Yup
- Organização da lógica em services

## 🛠 Tecnologias

- Node.js
- Express
- MySQL
- Sequelize
- JWT (jsonwebtoken)
- bcrypt
- dotenv

## 📁 Estrutura do Projeto

├── app.js
├── controllers/
├── services/
├── models/
├── routes/
├── middlewares/
├── config/
├── .env
└── README.md

## ⚙️ Como rodar o projeto

1. Clone o repositório:
   git clone <url-do-repo>
   cd SistemaDeReserva

2. Instale as dependências:
   npm install

3. Configure o arquivo `.env` com suas variáveis:
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=sua_senha
   DB_NAME=sistemadereserva
   JWT_SECRET=sua_chave_secreta

4. Execute as migrações e/ou crie as tabelas:
   _(se estiver usando Sequelize CLI ou crie manualmente no MySQL)_

5. Inicie o servidor:
   npm start
