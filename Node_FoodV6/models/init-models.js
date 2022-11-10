import today_model from "./tbl_todays.js";

/**
 * Sequelize 를 사용하여 DB table 을 관리하는 도구
 */
const initModels = (sequelize, DataTypes) => {
  const tbl_today = today_model(sequelize, DataTypes);
  return { tbl_today };
};

export default initModels;
