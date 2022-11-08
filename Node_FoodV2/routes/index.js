import {
  TD_SELECT_ALL,
  TD_FIND_BY_ID,
  TD_INSERT,
  TD_UPDATE,
  TD_DELETE,
  TD_DATE_LIST,
  TD_CAL_SUM_LIST,
  TD_CAL_LIST,
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
  const { t_date, t_time, t_content, t_qty, t_cal } = req.body;

  mysqlConn.execute(
    TD_INSERT,
    [t_date, t_time, t_content, t_qty, t_cal],
    (e, result, f) => {
      res.redirect("/");
    }
  );
});

export default router;
