import _tbl_bbs from "./tbl_bbs.js";
import _tbl_files from "./tbl_files.js";
const initModels = (sequelize) => {
  const tbl_bbs = _tbl_bbs(sequelize);
  const tbl_files = _tbl_files(sequelize);
  return {
    tbl_bbs,
    tbl_files,
  };
};

export default initModels;
