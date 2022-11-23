import express from "express";
import { MongoClient } from "mongodb";
import { atliasURL } from "../config/mongoDB.js";

// atlas 접속하기
// new 키워드를 사용하여 MongoClient 클래스를 통하여
// client 객체를 생성하기
// mongoDB에 연결하기 위한 준비도구
const client = new MongoClient(atliasURL);

// BBS(bbs 라는 이름으로) Collection 시작
const BBS = client.db().collection("bbs");
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  const bbs = {
    b_date: "2022-11-22",
    b_time: "10:36:00",
    b_write: "callor",
    b_title: "게시판 시작",
    b_content: "게시판을 작성합시다",
  };
  try {
    const result = await BBS.insertOne(bbs);
    return res.json(result);
  } catch (err) {
    return res.json(err);
  }

  // res.render("index", { title: "callor.com Express" });
});

export default router;
