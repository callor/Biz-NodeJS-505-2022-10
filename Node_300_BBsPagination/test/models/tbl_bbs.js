const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_bbs', {
    b_seq: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    b_pseq: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    b_date: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('date_format(now(),_utf8mb4\\'%Y-%m-%d\\')')
    },
    b_time: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('date_format(now(),_utf8mb4\\'%H:%i:%S\\')')
    },
    b_username: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    b_nickname: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    b_subject: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    b_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    b_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    b_update: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tbl_bbs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "b_seq" },
        ]
      },
    ]
  });
};
