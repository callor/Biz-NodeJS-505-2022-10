import express from "express";
import NAVER from "../config/naver_config.js";
import {
  CLIENT_ID,
  CLIENT_SECRET,
  BOOK_URL_JSON,
} from "../config/naver_config.js";

const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  // res.render("index", { title: "callor.com Express" });
  // const { CLIENT_ID, CLIENT_SECRET, BOOK_URL_JSON } = NAVER;
  const confirm = {
    ID1: NAVER.CLIENT_ID.KEY,
    ID2: CLIENT_ID.KEY,
  };
  // res.json(confirm);
  res.redirect("/book");
});

export default router;
