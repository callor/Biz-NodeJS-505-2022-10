import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("buyer/list", { buyers: [] });
});

router.get("/insert", (req, res) => {
  res.render("buyer/write");
});

router.get("/detail", (req, res) => {
  res.render("buyer/detail");
});

export default router;
