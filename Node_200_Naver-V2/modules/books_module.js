import DB from "../models/index.js";
// import { Op } from "sequelize";

const BOOKS = DB.models.tbl_books;
const MY_BOOKS = DB.models.tbl_mybooks;
const USERS = DB.models.tbl_users;

export const bookInput = async (book, user) => {
  const my_book = {
    my_username: user.username,
    my_isbn: book.isbn,
    my_odate: book.odate,
    my_oprice: book.discount,
  };

  // 도서정보 저장하기
  try {
    await BOOKS.create(book);
  } catch (err) {
    console.log("Book Create", err);
    try {
      // insert 가 실패하면 update 를 다시한번 시도 하기
      await BOOKS.update(book, { where: { isbn: book.isbn } });
    } catch (e) {
      console.log("Book Update", e);
      // return res.send("도서정보 저장 오류 발생");
      // exception 이 발생하면 exception 상위(호출한) 모듈로
      // 전가하기, 전달하기, 던지기
      // exception 을 직접 처리하기 않고 상위 모듈로 전달하기
      throw new Error("도서 정보 저장 오류!!");
    }
  }
  // 내(user) 도서 정보 저장하기
  try {
    await MY_BOOKS.create(my_book);
  } catch (err) {
    console.log("MyBook, Create", err);
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
      console.log("MyBook update", e);
      // return res.send("내 도서 정보 추가 오류");
      throw new Error("내 도서(MyBook) 정보 추가 오류");
    }
  }
};

export default { bookInput };
