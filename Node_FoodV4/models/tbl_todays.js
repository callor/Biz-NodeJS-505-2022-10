import Sequelize from "sequelize";

/**
 * Model :
 *  Sequelize 를 통해서 DBMS 와 연결, CRUD 실행을 하기 위한
 *  tbl_todayV2 table 정보를 설정
 */
const todayTableConfig = {
  t_seq: {
    autoIncrement: true, // Auto_increment 설정
    allowNull: false, // false: Not Null, true Default Null
    primaryKey: true, // PK 설정
    type: Sequelize.DataTypes.BIGINT, // MySQL BIGINT
  },
  t_date: {
    type: Sequelize.DataTypes.STRING(10), // VARCHAR(10)
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
};
const tbl_define = (sequelize) => {
  return sequelize.define("tbl_todayV2", todayTableConfig, {
    tableName: "tbl_todayV2",
    timestamps: false,
  });
};
export default tbl_define;
