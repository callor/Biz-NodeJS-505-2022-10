var DataTypes = require("sequelize").DataTypes;
var _tbl_todolist = require("./tbl_todolist");

function initModels(sequelize) {
  var tbl_todolist = _tbl_todolist(sequelize, DataTypes);


  return {
    tbl_todolist,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
