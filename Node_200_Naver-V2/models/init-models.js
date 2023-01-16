import _tbl_books from "./tbl_books.js";
import _tbl_mybooks from "./tbl_mybooks.js";
import _tbl_users from "./tbl_users.js";

const initModels = (sequelize) => {
  const tbl_books = _tbl_books(sequelize);
  const tbl_mybooks = _tbl_mybooks(sequelize);
  const tbl_users = _tbl_users(sequelize);

  tbl_books.belongsToMany(tbl_users, {
    as: "my_username_tbl_users",
    through: tbl_mybooks,
    foreignKey: "my_isbn",
    otherKey: "my_username",
  });
  tbl_users.belongsToMany(tbl_books, {
    as: "my_isbn_tbl_books",
    through: tbl_mybooks,
    foreignKey: "my_username",
    otherKey: "my_isbn",
  });
  tbl_mybooks.belongsTo(tbl_books, {
    as: "my_isbn_tbl_book",
    foreignKey: "my_isbn",
  });
  tbl_books.hasMany(tbl_mybooks, { as: "tbl_mybooks", foreignKey: "my_isbn" });
  tbl_mybooks.belongsTo(tbl_users, {
    as: "my_username_tbl_user",
    foreignKey: "my_username",
  });
  tbl_users.hasMany(tbl_mybooks, {
    as: "tbl_mybooks",
    foreignKey: "my_username",
  });

  return {
    tbl_books,
    tbl_mybooks,
    tbl_users,
  };
};

export default initModels;
