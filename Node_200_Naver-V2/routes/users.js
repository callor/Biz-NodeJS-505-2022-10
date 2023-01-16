import express from "express";
import DB from "../models/index.js";
const USER = DB.models.tbl_users;
const router = express.Router();

router.get("/join", async (req, res, next) => {
  return res.render("users/join");
});

router.post("/join", (req, res) => {
  const username = req.body?.username;
});

export default router;
