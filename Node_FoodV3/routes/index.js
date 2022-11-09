import {
  TD_SELECT_ALL,
  TD_FIND_BY_ID,
  TD_INSERT,
  TD_UPDATE,
  TD_DELETE,
  TD_DATE_LIST,
  TD_CAL_SUM_LIST,
  TD_CAL_LIST,
  TD_INSERT_OR_UPDATE,
} from "../modules/food_CRUD.js";
import mysqlConn from "../modules/mysqlDB.js";

import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  mysqlConn.execute(TD_SELECT_ALL, (err, todays, field) => {
    res.render("index", { todays });
  });
});

/**
 * 배열의 전개 연산자를 이용한 배열 합치기
 * arr1 = [1,2,3,4,5]
 * arr2 = [9,8,7,6]
 * arr3 = [...arr1, ...arr2]
 * ? arr3 = [1,2,3,4,5,9,8,7,6]
 *
 */
router.post("/", (req, res) => {
  const params = [...Object.values(req.body), ...Object.values(req.body)];
  console.log(params);
  /**
   * MySQL 의 INSERT ON DUPLICATE KEY SQL 을 사용하여
   * Insert Or Update 를 실행하려고 하면
   * parameter 로 사용되는 배열을 두번 나열해주어야 한다.
   * [t_set,t_date,...,  t_seq,t_date]
   * MySQL2 버그로 생각됨
   */
  mysqlConn.execute(TD_INSERT_OR_UPDATE, params, (e, result, f) => {
    console.log(e);
    res.redirect("/");
  });
});

export default router;
