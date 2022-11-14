import express from "express";
import DB from "../models/index.js";
const Buyer = DB.models.tbl_buyer;

const router = express.Router();

router.get("/", async (req, res) => {
  const buyers = await Buyer.findAll();
  res.render("buyer/list", { buyers });
});

router.get("/insert", (req, res) => {
  res.render("buyer/write");
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

router.get("/detail", (req, res) => {
  res.render("buyer/detail");
});

export default router;
