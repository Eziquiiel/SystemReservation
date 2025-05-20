module.exports = (sequelize, DataTypes) => {
  const ReservaModel = sequelize.define(
    "Reserva",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      servico_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Services",
          key: "id",
        },
      },
      horario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Hours",
          key: "id",
        },
      },
      status: {
        type: DataTypes.ENUM("pendente", "aprovado", "cancelado"),
        allowNull: false,
      },
    },
    {
      createdAt: "criado_em",
      updatedAt: "atualizado_em",
    }
  );

  return ReservaModel;
};

//- `id`, `usuario_id`, `servico_id`, `horario_id`, `status`, `criado_em`
