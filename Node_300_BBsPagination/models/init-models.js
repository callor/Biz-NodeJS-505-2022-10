import _tbl_bbs from "./tbl_bbs.js";
const initModels = (sequelize) => {
  const tbl_bbs = _tbl_bbs(sequelize);

  return {
    tbl_bbs,
  };
};

export default initModels;
