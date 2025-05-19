const jwt = require("jsonwebtoken");
require("dotenv").config();

async function Middleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token inválido" });
  }

  console.log(token);

  try {
    const SECRET = process.env.SECRET;
    const decoded = jwt.verify(token, SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ error });
  }
}

module.exports = Middleware;
