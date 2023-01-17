import express from "express";
import { getBooks } from "../modules/naver_module.js";
import Books from "../modules/books_module.js";

import DB from "../models/index.js";
// import { Op } from "sequelize";

const BOOKS = DB.models.tbl_books;
const MY_BOOKS = DB.models.tbl_mybooks;
const USERS = DB.models.tbl_users;

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
  return res.render("book/detail", { BOOK: book });
});

let count = 0;
router.post("/insert", async (req, res) => {
  console.log("count", count++);
  const user = {
    username: "callor",
    password: "12341234",
    u_level: 0,
    u_name: "홍길동",
    u_nickname: "길동이",
  };
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

export default router;
