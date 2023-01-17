import { Sequelize } from "sequelize";

const tbl_books = (sequelize) => {
  return sequelize.define(
    "tbl_books",
    {
      isbn: {
        type: Sequelize.DataTypes.STRING(13),
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: Sequelize.DataTypes.STRING(125),
        allowNull: true,
      },
      link: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: true,
      },
      image: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: true,
      },
      author: {
        type: Sequelize.DataTypes.STRING(125),
        allowNull: true,
      },
      discount: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
      },
      publisher: {
        type: Sequelize.DataTypes.STRING(125),
        allowNull: true,
      },
      description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
      },
      pubdate: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: true,
      },
      price: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "tbl_books",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "isbn" }],
        },
      ],
    }
  );
};

export default tbl_books;
