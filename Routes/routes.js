const routes = require("express").Router();
const services = require("./services");

routes.use("/", services);

module.exports = routes;
