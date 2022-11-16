const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_iolist', {
    io_bcode: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    io_date: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    io_time: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_iolist',
    timestamps: false
  });
};
