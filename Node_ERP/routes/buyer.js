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

/**
 * web 에서 거래처 코드 자동생성을 요청할때
 * DB 에서 b_code 가장 큰값 + 1 을 연산하여
 * web Response 하는 router
 *
 * 가장 큰 거래처 코드가 B0001 < B0002 < B0111 이렇게 등록되어 있을때
 * B0112 코드를 자동생성하여 response 하기
 */
router.get("/get/bcode", async (req, res) => {
  /**
   * sequelize 에서는 기본적인 CRUD 를 함수로 제공한다
   * 하지만 기본적으로 제공하는 기능이 아닌 특별한 SQL 을 사용하는 방법
   * 이때 기본이외의 별도 SQL 을 작성하는 것을 Raw SQL Query 라고 한다
   */
  const rawSQL = "SELECT * FROM tbl_buyer ORDER BY b_code DESC LIMIT 1";
  try {
    const [buyer, field] = await DB.sequelize.query(rawSQL, { model: Buyer });
    let bcode = "B0000"; // 거래처코드 Domain(코드 규칙) 이라고 하자

    /**
     * 거래처 table 에서 조회한 데이터가 있으면
     * 조회한 데이터의 거래처코드를 bcode 에 담고
     * 그렇지 않으면 B0000 을 담아라
     */
    bcode = buyer?.b_code || bcode;

    // bcode 값을 0번째 부터 1번째 앞까지 잘르기 : B 문자열 한개를 추출하기
    const prefix = bcode.substring(0, 1);
    // bcode 값을 1번째 부터 나머지 모두 : 0000 부문 문자열 추출하기
    const suffix = bcode.substring(1);
    // suffix 문자열형 숫자를 실제 숫자로 변경하고 1 증가
    const codeSeq = Number(suffix) + 1;

    // 만약 codeSeq 값이 3 이라면 00003 형식의 문자열을 만들어라
    bcode = `00000${codeSeq}`; // 00003
    bcode = bcode.substring(bcode.length - 4); // 0003
    bcode = prefix + bcode; // B0003
    res.send(bcode);
  } catch (err) {}
});

export default router;
