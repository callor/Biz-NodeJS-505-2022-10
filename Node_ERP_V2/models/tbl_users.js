import Sequelize from "sequelize";
export default (sequelize) => {
  return sequelize.define(
    "tbl_users",
    {
      username: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true,
      },
      password: {
        type: Sequelize.DataTypes.STRING(125),
        allowNull: false,
      },
      real_name: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: true,
      },
      usertel: {
        type: Sequelize.DataTypes.STRING(15),
        allowNull: true,
      },
      nick_name: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
      user_role: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 9,
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
