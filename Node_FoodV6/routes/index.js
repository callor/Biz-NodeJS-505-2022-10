import express from "express";
import DB from "../models/index.js";

const router = express.Router();
const Today = DB.models.tbl_today;

/* GET home page. */
router.get("/", async (req, res, next) => {
  // console.log("Root");
  const todays = await Today.findAll();
  res.send("OK");
  // res.render("index", { todays });
});

router.post("/", async (req, res) => {
  res.redirect("/");
});
export default router;
