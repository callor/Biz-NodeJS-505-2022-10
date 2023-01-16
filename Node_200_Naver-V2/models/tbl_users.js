import { Sequelize } from "sequelize";
const tbl_users = (sequelize) => {
  return sequelize.define(
    "tbl_users",
    {
      username: {
        type: Sequelize.DataTypes.STRING(15),
        allowNull: false,
        primaryKey: true,
      },
      password: {
        type: Sequelize.DataTypes.STRING(13),
        allowNull: false,
      },
      u_name: {
        type: Sequelize.DataTypes.STRING(125),
        allowNull: false,
      },
      u_tel: {
        type: Sequelize.DataTypes.STRING(15),
        allowNull: true,
      },
      u_addr: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: true,
      },
      u_nickname: {
        type: Sequelize.DataTypes.STRING(125),
        allowNull: true,
      },
      u_level: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "tbl_users",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "username" }],
        },
      ],
    }
  );
};

export default tbl_users;
