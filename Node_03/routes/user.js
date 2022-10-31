import express from "express";
const router = express.Router();
router.get("/", (req, res) => {
  res.send("나는 /user Router 입니다");
});
export default router;
