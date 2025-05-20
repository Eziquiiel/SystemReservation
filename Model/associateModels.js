const sequelize = require("../DB/conn");
const { DataTypes } = require("sequelize");

const User = require("./userModel")(sequelize, DataTypes);
const Reserva = require("./reservaModel")(sequelize, DataTypes);
const Service = require("./serviceModel")(sequelize, DataTypes);
const Hours = require("./hoursModel")(sequelize, DataTypes);

// Associações
User.hasMany(Reserva, { foreignKey: "usuario_id" });
Reserva.belongsTo(User, { foreignKey: "usuario_id" });

Service.hasMany(Reserva, { foreignKey: "servico_id" });
Reserva.belongsTo(Service, { foreignKey: "servico_id" });

Hours.hasMany(Reserva, { foreignKey: "horario_id" });
Reserva.belongsTo(Hours, { foreignKey: "horario_id" });

module.exports = {
  User,
  Reserva,
  Service,
  Hours,
};
