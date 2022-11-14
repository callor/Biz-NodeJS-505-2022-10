import Sequelize from "sequelize";

export default (sequelize) => {
  return sequelize.define(
    "tbl_buyer",
    {
      b_code: {
        type: Sequelize.DataTypes.STRING(5),
        allowNull: false,
        primaryKey: true,
        comment: "거래처코드",
      },
      b_title: {
        type: Sequelize.DataTypes.STRING(125),
        allowNull: false,
      },
      b_ceo: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
      b_sid: {
        type: Sequelize.DataTypes.STRING(14),
        allowNull: true,
      },
      b_tel: {
        type: Sequelize.DataTypes.STRING(15),
        allowNull: true,
      },
      b_industry: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: true,
      },
      b_business: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: true,
      },
      b_ceo_tel: {
        type: Sequelize.DataTypes.STRING(14),
        allowNull: true,
      },
      b_manager: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
      b_man_tel: {
        type: Sequelize.DataTypes.STRING(14),
        allowNull: false,
      },
      b_tax_addr: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: true,
      },
      b_post_code: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: true,
      },
      b_post_addr: {
        type: Sequelize.DataTypes.STRING(125),
        allowNull: true,
      },
      b_etc_addr: {
        type: Sequelize.DataTypes.STRING(125),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "tbl_buyer",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "b_code" }],
        },
      ],
    }
  );
};
