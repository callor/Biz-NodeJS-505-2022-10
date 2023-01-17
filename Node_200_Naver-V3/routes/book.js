import express from "express";
import { getBooks } from "../modules/naver_module.js";
import Books from "../modules/books_module.js";
import moment from "moment";

// import DB from "../models/index.js";
// // import { Op } from "sequelize";

// const BOOKS = DB.models.tbl_books;
// const MY_BOOKS = DB.models.tbl_mybooks;
// const USERS = DB.models.tbl_users;

const router = express.Router();

router.get("/", async (req, res) => {
  const search = req.query.search;
  if (!search) {
    return res.render("book/list", { BOOKS: [] });
  }

  /**
   * getBooks() 함수에서 throw new Error() 가 실행되면
   * getBooks() 함수를 호출하는 아래의 코드에서 Exception 이 발생한다
   * 발생한 Exception 을 여기에서 처리(try catch)한다
   */
  try {
    const book_list = await getBooks(search);
    return res.render("book/list", { BOOKS: book_list });
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
});

router.get("/detail/:isbn", async (req, res) => {
  const result = await getBooks(req.params.isbn);
  const book = result[0];
  book.price = Number(book.discount) / 0.9;
  book.odate = moment().format("YYYY[-]MM[-]DD");
  return res.render("book/detail", { BOOK: book });
});

router.post("/insert", async (req, res) => {
  /**
   * 로그인한 사용자 정보를 사용하여 도서 정보 만들기
   * tbl_books 테이블은 일반적인 도서정보 저장
   * tbl_mybooks 테이블은 도서정보+사용자정보를 저장하여
   *    Relation 이라고 한다.
   *
   */
  // session 에서 로그인한 사용자 정보 추출
  const user = req?.session?.user;
  const book = req.body;

  // 도서정보를 books_modules.js 의 bookInput() 에게 이전하기
  try {
    await Books.bookInput(book, user);
  } catch (e) {
    const error = JSON.parse(e.message);
    return res.json(error);
  }
  res.redirect("/book");
});

// books/user 로 요청하면
router.get("/user", async (req, res) => {
  const user = req.session?.user;
  if (!user) return res.redirect("/user/login?error=LOGIN");

  try {
    const result = await Books.getMyBooks(user);
    return res.render("book/list", { BOOKS: result });
  } catch (e) {
    return res.send("도서정보 find 실패 관리자에게 문의하세요");
  }
});

export default router;
