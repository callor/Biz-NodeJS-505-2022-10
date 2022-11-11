import _tbl_today from "./sample_model.js";
const initModels = (sequelize) => {
  // models/sample_model.js 파일에 설정된 table 정보를 import 하고
  // 그정보를 사용하여 tbl_today 객체를 만들어라
  const tbl_today = _tbl_today(sequelize);
  return {
    tbl_today,
  };
};

export default initModels;
