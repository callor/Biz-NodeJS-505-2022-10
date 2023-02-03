import express from "express";
import DB from "../models/index.js";

const BBS = DB.models.tbl_bbs;
const router = express.Router();

/**
 * 전체 데이터 개수 : DB의 table 의 개수, listTotalCount
 * 한 화면에 보여질 데이터개수 : 10개, listLimit
 * 페이지 Nav 개수 : 10개, pageNavCount
 * 보고자 하는 페이지 번호, pageNum
 */

const pagiNation = {};

router.all("*", async (req, res, next) => {
  const { pageNum, listLimit, pageNavCount } = req.query;

  try {
    pagiNation.listTotalCount = await BBS.count();
  } catch (e) {
    console.log(e);
    return {
      CODE: 500,
      CODE_NAME: "BBS_COUNT_ERROR",
      MESSAGE: "BBS 데이터 개수 SQL 오류",
    };
  }

  pagiNation.listLimit = Number(listLimit) || 10;
  pagiNation.pageNavCount = Number(pageNavCount) || 10;

  // 전체 데이터를 표현하는데 몇페이지가 필요한가를 계산하기
  pagiNation.pageTotalCount = Math.ceil(
    pagiNation.listTotalCount / pagiNation.listLimit
  );
  pagiNation.pageNum = Number(pageNum || 1);
  pagiNation.offset = (pagiNation.pageNum - 1) * pagiNation.listLimit;

  // 화면하단 Page Nav 를 표현할 개수중에 시작 Nav Num 계산하기
  pagiNation.startNavNum = Math.floor(pagiNation.pageNum / 2);
  pagiNation.startNavNum =
    pagiNation.startNavNum < 1 ? 1 : pagiNation.startNavNum;

  next();
});

/* GET home page. */
router.get("/", async (req, res, next) => {
  const result = await BBS.findAll({
    limit: pagiNation.listLimit,
    offset: pagiNation.offset,
  });
  return res.json({ pagiNation, result });

  // res.render("index", { title: "callor.com Express" });
});

export default router;
