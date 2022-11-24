import express from "express";
import BBS from "../models/tbl_bbs.js";
import moment from "moment";
const dateFormat = "YYYY-MM-DD";
const timeFormat = "HH:mm:ss";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // bbs 데이터 전체 SELECT
    const bbsResult = await BBS.find();
    // SELECT 된 bbs 데이터(bbsResult)를
    // bbsList 변수에 담아서 index 에게 rendering 하기
    return res.render("index", { bbsList: bbsResult });
  } catch (err) {
    return res.json(err);
  }
});

router.get("/insert", (req, res) => {
  const bbs = new BBS();
  // moment 를 사용하여 현재 날짜 시각을
  // 지정한 format 형식의 문자열로 만들어서
  // 각각 b_date, b_time 칼럼에 추가하라
  bbs.b_date = moment().format(dateFormat);
  bbs.b_time = moment().format(timeFormat);
  res.render("write", { bbs });
});

router.post("/insert", async (req, res) => {
  const newBBs = new BBS(req.body);
  try {
    await newBBs.save();
    res.redirect("/");
  } catch (err) {
    res.json(err);
  }
});

router.get("/detail/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await BBS.findById(id);
    return res.render("detail", { bbs: result });
  } catch (err) {
    res.json(err);
  }
});

router.get("/update/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await BBS.findById(id);
    return res.render("write", { bbs: result });
  } catch (err) {}
});

router.post("/update/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await BBS.updateOne({ _id: id }, { $set: req.body });
    return res.redirect(`/detail/${id}`);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});

router.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await BBS.findByIdAndDelete(id);
    return res.redirect("/");
  } catch (err) {
    res.json(err);
  }
});

/**
 * router 의 RequestMethod
 * POST, PUT, GET, DELETE
 * POST : 처음 새로운 데이터를 서버로 보내서 INSERT 요청
 * PUT : 기존의 데이터를 Update 요청
 * GET : 데이터를 클라이언트에서 요구할때
 * DELETE : 기존 데이터를 삭제할때
 */
router.put("/comment/add", async (req, res) => {
  const { id, ct_comment } = req.body;
  const commentData = {
    ct_comment,
    ct_writer: "익명",
    ct_date: moment().format(dateFormat),
    ct_time: moment().format(timeFormat),
  };
  console.log(id, ct_comment);

  try {
    // id 에 해당하는 데이터 찾기
    const bbs = await BBS.findById(id);
    // 기존의 댓글에 추가하기
    bbs.b_comments.push(commentData);
    await bbs.save();
    return res.json(bbs);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
});

/* GET home page. */
router.get("/input", async (req, res, next) => {
  const bbsContent = {
    b_date: "2022-11-23",
    b_time: "09:36:00",
    b_writer: "callor",
    b_subject: "Mongoose 게시판 시작",
    b_content: "Mongoose 게시판 프로젝트",
  };
  try {
    /**
     * bbsContent 데이터(JSON)를 사용하여
     * mongoose 모델객체 bbs 를 새로 생성하고
     * 모델객체 bbs 의 save() 함수를 호출하여
     * 데이터를 추가하기
     */
    const bbs = new BBS(bbsContent);
    const result = await bbs.save();
    return res.json(result);
  } catch (err) {
    return res.json(err);
  }

  // res.render("index", { title: "callor.com Express" });
});

export default router;
