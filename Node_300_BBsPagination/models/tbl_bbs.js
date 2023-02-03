import Sequelize from "sequelize";
export default function (sequelize) {
  return sequelize.define(
    "tbl_bbs",
    {
      b_seq: {
        autoIncrement: true,
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      b_pseq: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: true,
      },
      b_date: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: true,
        defaultValue: Sequelize.Sequelize.literal(
          '(date_format(now(),_utf8mb4"%Y-%m-%d"))'
        ),
      },
      b_time: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: true,
        defaultValue: Sequelize.Sequelize.literal(
          '(date_format(now(),"_utf8mb4%H:%i:%S"))'
        ),
      },
      b_username: {
        type: Sequelize.DataTypes.STRING(125),
        allowNull: true,
      },
      b_nickname: {
        type: Sequelize.DataTypes.STRING(125),
        allowNull: true,
      },
      b_subject: {
        type: Sequelize.DataTypes.STRING(125),
        allowNull: true,
      },
      b_content: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
      },
      b_count: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
      },
      b_update: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true,
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
}
