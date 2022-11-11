import { JSONCookie } from "cookie-parser";
import express from "express";

import DB from "../models/index.js";
const Today = DB.models.tbl_today;

const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  const todays = await Today.findAll();
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

export default router;
