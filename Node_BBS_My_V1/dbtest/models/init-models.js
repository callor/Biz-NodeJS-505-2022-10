var DataTypes = require("sequelize").DataTypes;
var _tbl_bbs = require("./tbl_bbs");
var _tbl_files = require("./tbl_files");
var _tbl_student = require("./tbl_student");

function initModels(sequelize) {
  var tbl_bbs = _tbl_bbs(sequelize, DataTypes);
  var tbl_files = _tbl_files(sequelize, DataTypes);
  var tbl_student = _tbl_student(sequelize, DataTypes);

  tbl_files.belongsTo(tbl_bbs, { as: "f_bseq_tbl_bb", foreignKey: "f_bseq"});
  tbl_bbs.hasMany(tbl_files, { as: "tbl_files", foreignKey: "f_bseq"});

  return {
    tbl_bbs,
    tbl_files,
    tbl_student,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
