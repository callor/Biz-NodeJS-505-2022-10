import express from "express";
import moment from "moment";

import DB from "../models/index.js";
const Today = DB.models.tbl_today;

const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  const todays = await Today.findAll();
  const dateTime = {
    t_date: moment().format("YYYY-MM-DD"),
    t_time: moment().format("hh:mm:ss"),
  };
  res.render("index", { todays, dateTime });
});

/**
 * select 를 할때
 * PK를 기준으로 조건조회(WHERE SELECT)를 하면
 * 데이터는 1개 이하만 나타난다
 * 다른 칼럼을 기준으로 조건조회를 하면
 * 데이터는 0개 이상이 나타는데
 * 만약 1개만 나타나더라도 이데이터는 LIST(배열, 여러개로 인식)
 *
 * PK 를 기준으로 조건조회를 할때는
 * Today.findOne({where : {t_seq:req.params.t_seq}}) 를 사용한다
 * 이때는 데이터가 LIST 가 아닐수 있다
 *
 * PK 일때 권장하는 함수
 * Today.findByPk(req.params.t_seq) 를 사용한다
 */
router.get("/get/:t_seq", async (req, res, next) => {
  const todays = await Today.findAll({ where: { t_seq: req.params.t_seq } });
  res.render("index", { todays });
});

router.post("/", async (req, res) => {
  // const { t_seq, t_date, t_time, t_content, t_qty, t_cal } = re.body;
  // console.log("Data", req.body);
  /**
   * Today.save(req.body)
   * 현재버전에서 작동안되는 함수
   * Insert Or Update 를 실행하는 함수
   */
  try {
    await Today.create(req.body);
  } catch (err) {
    await Today.update(req.body, { where: { t_seq: req.body.t_seq } });
    // console.error(err);
  }
  res.redirect("/");
});

router.get("/delete/:t_seq", async (req, res) => {
  await Today.destroy({ where: { t_seq: req.params.t_seq } });
  res.redirect("/");
});
export default router;
