import _tbl_bbs from "./tbl_bbs.js";
import _tbl_files from "./tbl_files.js";
const initModels = (sequelize) => {
  const tbl_bbs = _tbl_bbs(sequelize);
  const tbl_files = _tbl_files(sequelize);

  /**
   * bbs:files = 1:N 의 관계 설정
   * associate
   */
  tbl_files.belongsTo(tbl_bbs, { as: "fk_bbs", foreignKey: "f_bseq" });
  tbl_bbs.hasMany(tbl_files, { as: "m_files", foreignKey: "f_bseq" });

  return {
    tbl_bbs,
    tbl_files,
  };
};

export default initModels;
