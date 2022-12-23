import Sequelize from "sequelize";
export default (sequelize) => {
  return sequelize.define(
    "tbl_todolist",
    {
      id: {
        autoIncrement: true,
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      s_date: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false,
      },
      s_time: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false,
      },
      t_content: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
      },
      e_date: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: true,
      },
      e_time: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "tbl_todolist",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
