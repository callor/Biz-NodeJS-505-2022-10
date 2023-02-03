var DataTypes = require("sequelize").DataTypes;
var _tbl_bbs = require("./tbl_bbs");

function initModels(sequelize) {
  var tbl_bbs = _tbl_bbs(sequelize, DataTypes);


  return {
    tbl_bbs,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
