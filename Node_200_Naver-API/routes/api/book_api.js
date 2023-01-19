import express from "express";
import { getBooks } from "../../modules/naver_module.js";
import { getMyBooks } from "../../modules/books_module.js";
import { BOOK_RES, NAVER_RES } from "../../config/api_res_code.js";

const router = express.Router();

router.get("/search", async (req, res) => {
  const search = req.query?.search;
  if (!search) return res.json(NAVER_RES.NOT_SEARCH);

  let resultBooks;
  try {
    resultBooks = await getBooks(search);
  } catch (e) {
    return res.json(JSON.parse(e.message));
  }
  return res.json(resultBooks);
});

router.get("/my/:username", async (req, res) => {
  const username = req.params.username;
  const myBooks = await getMyBooks({ username });
  return res.json(myBooks);
});

router.post("/input", (req, res) => {});
router.get("/detail/:isbn", (req, res) => {});
router.get("/user/:uername", (req, res) => {});

export default router;
