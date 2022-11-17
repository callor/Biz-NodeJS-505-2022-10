import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("products/list");
});

router.get("/insert", (req, res) => {
  res.render("products/write");
});

export default router;
