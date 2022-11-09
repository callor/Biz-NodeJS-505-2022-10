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

router.post("/", (req, res) => {
  let { t_seq, t_date, t_time, t_content, t_qty, t_cal } = req.body;
  console.log(t_seq);
  t_seq = t_seq || 0;

  mysqlConn.execute(
    TD_INSERT_OR_UPDATE,
    [t_seq, t_date, t_time, t_content, t_qty, t_cal],
    (e, result, f) => {
      console.log(e);
      res.redirect("/");
    }
  );
});

export default router;
