import { Sequelize } from "sequelize";
const tbl_mybooks = (sequelize) => {
  return sequelize.define(
    "tbl_mybooks",
    {
      my_username: {
        type: Sequelize.DataTypes.STRING(15),
        allowNull: false,
        primaryKey: true,
        references: {
          model: "tbl_users",
          key: "username",
        },
      },
      my_isbn: {
        type: Sequelize.DataTypes.STRING(13),
        allowNull: false,
        primaryKey: true,
        references: {
          model: "tbl_books",
          key: "isbn",
        },
      },
      my_odate: {
        type: Sequelize.DataTypes.STRING(15),
        allowNull: true,
      },
      my_oprice: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "tbl_mybooks",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "my_username" }, { name: "my_isbn" }],
        },
        {
          name: "f_books",
          using: "BTREE",
          fields: [{ name: "my_isbn" }],
        },
      ],
    }
  );
};

export default tbl_mybooks;
