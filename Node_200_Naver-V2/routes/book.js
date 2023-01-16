import express from "express";
import { getBooks } from "../modules/fetch_module.js";
import DB from "../models/index.js";
import { Op } from "sequelize";

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
  const book = req.body;
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

  try {
    const mybooks = await MY_BOOKS.findAll();
    const books = await BOOKS.findAll();
    // return res.json({ BOOKS: books, MYBOOKS: mybooks });
    res.redirect("/book");
  } catch (err) {
    return res.send("Select 오류");
  }
});

export default router;
