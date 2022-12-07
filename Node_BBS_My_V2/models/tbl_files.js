import { Sequelize } from "sequelize";
export default (sequelize) => {
  return sequelize.define(
    "tbl_files",
    {
      f_seq: {
        autoIncrement: true,
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      f_bseq: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "tbl_bbs",
          key: "b_seq",
        },
      },
      f_date: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal(
          "(date_format(now(),_utf8mb4'%Y-%m-%d'))"
        ),
      },
      f_time: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal(
          "(date_format(now(),_utf8mb4'%H:%i:%S'))"
        ),
      },
      f_original_name: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
      },
      f_save_name: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
      },
      f_ext: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "tbl_files",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "f_seq" }],
        },
        {
          name: "f_bbs",
          using: "BTREE",
          fields: [{ name: "f_bseq" }],
        },
      ],
    }
  );
};
