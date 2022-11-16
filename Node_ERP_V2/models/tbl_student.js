const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_student', {
    st_num: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    st_name: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    st_dept: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    st_grade: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    st_tel: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    st_addr: {
      type: DataTypes.STRING(125),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_student',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "st_num" },
        ]
      },
    ]
  });
};
