import { Sequelize } from "sequelize";
const tbl_bbs = (sequelize) => {
  return sequelize.define(
    "tbl_bbs",
    {
      b_seq: {
        autoIncrement: true,
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      b_date: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal(
          "(date_format(now(),_utf8mb4'%Y-%m-%d'))"
        ),
      },
      b_time: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal(
          "(date_format(now(),_utf8mb4'%H:%i:%S'))"
        ),
      },
      b_writer: {
        type: Sequelize.DataTypes.STRING(125),
        allowNull: false,
      },
      b_subject: {
        type: Sequelize.DataTypes.STRING(125),
        allowNull: false,
      },
      b_content: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
      },
      b_count: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
      },
      b_update: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      sequelize,
      tableName: "tbl_bbs",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "b_seq" }],
        },
      ],
    }
  );
};

export default tbl_bbs;
