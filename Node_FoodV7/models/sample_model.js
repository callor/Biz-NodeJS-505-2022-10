import Sequelize from "sequelize";
export default (sequelize) => {
  return sequelize.define(
    "tbl_todayV7",
    {
      t_seq: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      t_date: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false,
      },
      t_time: {
        type: Sequelize.DataTypes.STRING(14),
        allowNull: false,
      },
      t_content: {
        type: Sequelize.DataTypes.STRING(125),
        allowNull: false,
      },
      t_qty: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
      },
      t_cal: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      // tableName 을 생략하면
      // CREATE TABLE 명령이 실행될때 table 이름이 복수로 생성된다
      tableName: "tbl_todayV7",

      // createAT, updateAT 칼럼을
      // 생성(true, 기본값)할것인가 말것(false)
      // timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "st_num" }],
        },
      ],
    }
  );
};
