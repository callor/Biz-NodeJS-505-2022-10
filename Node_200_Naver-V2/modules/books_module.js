import DB from "../models/index.js";
// import { Op } from "sequelize";

const BOOKS = DB.models.tbl_books;
const MY_BOOKS = DB.models.tbl_mybooks;
const USERS = DB.models.tbl_users;

export const bookInput = async () => {
  const my_book = {
    my_username: "callor",
    my_isbn: req.body.isbn,
    my_odate: req.body.odate,
    my_oprice: req.body.discount,
  };
  const user = {
    username: "callor",
    password: "12341234",
    u_level: 0,
    u_name: "홍길동",
    u_nickname: "길동이",
  };

  // user 정보를 추가할때 오류가 발생하면 그냥 통과
  try {
    await USERS.create(user);
  } catch (e) {
    console.log(e);
  }

  try {
    await BOOKS.create(book);
  } catch (err) {
    // console.log("create", err);
    try {
      console.log("Update");
      // insert 가 실패하면 update 를 다시한번 시도 하기
      await BOOKS.update(book, { where: { isbn: book.isbn } });
    } catch (e) {
      console.log("update", e);
      return res.send("도서정보 저장 오류 발생");
    }
  }
  try {
    await MY_BOOKS.create(my_book);
  } catch (err) {
    // console.log("Create", err);
    try {
      await MY_BOOKS.update(my_book, {
        // Op.and 속성대신에 where {조건1, 조건2,...} 을
        // 부여하면 조건1 and 조건2 and ... 이 성립된다.
        where: {
          my_isbn: my_book.my_isbn,
          my_username: my_book.my_username,
        },
      });
    } catch (e) {
      console.log("update", e);
      return res.send("내 도서 정보 추가 오류");
    }
  }
};

export default { bookInput };
