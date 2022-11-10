const tbl_define = (sequelize, DataTypes) => {
  return sequelize.define(
    "tbl_today",
    {
      t_seq: {
        autoIncrement: true, // Auto_increment 설정
        allowNull: false, // false: Not Null, true Default Null
        primaryKey: true, // PK 설정
        type: DataTypes.BIGINT, // MySQL BIGINT
      },
      t_date: {
        type: DataTypes.STRING(10), // VARCHAR(10)
        allowNull: false,
      },
      t_time: {
        type: DataTypes.STRING(14),
        allowNull: false,
      },
      t_content: {
        type: DataTypes.STRING(125),
        allowNull: false,
      },
      t_qty: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      t_cal: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      sequelize,
      tableName: "tbl_today",
    }
  );
};
export default tbl_define;
