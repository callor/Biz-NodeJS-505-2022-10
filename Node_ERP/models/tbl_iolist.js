import Sequelize from "sequelize";
export default (sequelize) => {
  return sequelize.define(
    "tbl_iolist",
    {
      io_bcode: {
        type: Sequelize.DataTypes.STRING(5),
        allowNull: true,
      },
      io_date: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: true,
      },
      io_time: {
        type: Sequelize.DataTypes.STRING(15),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "tbl_iolist",
      timestamps: false,
    }
  );
};
