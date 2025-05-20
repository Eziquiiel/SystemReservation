const routes = require("express").Router();
const authController = require("../Controller/Auth/authController");
const loginController = require("../Controller/Auth/loginController");
const userAllController = require("../Controller/User/userAllController");
const userIDController = require("../Controller/User/userIDController");
const middleware = require("../Controller/Auth/middleware");
const deleteController = require("../Controller/User/userDeleteController");
const createServiceController = require("../Controller/service/createServiceController");
const getServiceController = require("../Controller/service/getServiceController");
const putServicecontroller = require("../Controller/service/putServiceController");
const deleteServiceController = require("../Controller/service/deleteServiceController");
const postHourController = require("../Controller/hour/postHourController");
const getHourController = require("../Controller/hour/getHourController");
const puthourController = require("../Controller/hour/putHourController");
const postReservaController = require("../Controller/reserva/postReservaController");
const getReservaController = require("../Controller/reserva/getReservaController");
const putReservaController = require("../Controller/reserva/putReservaController");

// Autentificação
routes.post("/register", authController);
routes.post("/login", loginController);

//User
routes.get("/user", middleware, userAllController);
routes.get("/user/:id", userIDController);
routes.delete("/user/:id", middleware, deleteController);

//Service
routes.post("/service", middleware, createServiceController);
routes.get("/service", getServiceController);
routes.put("/service/:id", middleware, putServicecontroller);
routes.delete("/service/:id", middleware, deleteServiceController);

//Hours
routes.post("/hour", middleware, postHourController);
routes.get("/hour", getHourController);
routes.put("/hour/:id", middleware, puthourController);

//Reserva
routes.post("/reserva", postReservaController);
routes.get("/reserva", middleware, getReservaController);
routes.put("/reserva/:id/", putReservaController);

module.exports = routes;
