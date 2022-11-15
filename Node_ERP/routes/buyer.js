import express from "express";
import DB from "../models/index.js";
const Buyer = DB.models.tbl_buyer;

const router = express.Router();

router.get("/", async (req, res) => {
  const buyers = await Buyer.findAll();
  res.render("buyer/list", { buyers });
});

router.get("/insert", (req, res) => {
  res.render("buyer/write", { buyer: {} });
});

router.post("/insert", async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    await Buyer.create(data);
    res.redirect("/buyer");
  } catch (err) {
    console.error(err);
    res.send("SQL 오류");
  }
});

router.get("/detail/:bcode", async (req, res) => {
  const bcode = req.params.bcode;

  try {
    /**
     * find() 함수는 1개의 데이터이더라도 결과값이 무조건 배열이다
     * findOne() 함수는 1개의 결과만 찾고 만약 결과가 여러개 이더라도
     *    최초의 한개만 추출한다
     *    결과는 무조건 단일 객체이다
     */
    const buyer = await Buyer.findOne({ where: { b_code: bcode } });
    res.render("buyer/detail", { buyer });
  } catch (err) {
    res.send("SQL 오류!! 데이터를 찾을 수 없음");
  }
});

router.get("/update/:bcode", async (req, res) => {
  const bcode = req.params.bcode;
  try {
    const buyer = await Buyer.findOne({ where: { b_code: bcode } });
    res.render("buyer/write", { buyer: buyer });
  } catch (err) {
    res.send("SQL 오류~~ 데이터를 찾을 수 없음");
  }
});

router.post("/update/:bcode", async (req, res) => {
  try {
    await Buyer.update(req.body, { where: { b_code: req.body.b_code } });
    res.redirect(`/buyer/detail/${req.body.b_code}`);
  } catch (err) {
    res.send("SQL 오류");
  }
});

router.get("/delete/:bcode", async (req, res) => {
  const bcode = req.params.bcode;

  try {
    await Buyer.destroy({ where: { b_code: bcode } });
    res.redirect("/buyer");
  } catch (err) {
    res.send("SQL 오류");
  }
});

export default router;
