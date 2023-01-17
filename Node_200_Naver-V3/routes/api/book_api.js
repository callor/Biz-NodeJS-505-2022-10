import express from "express";
import { getBooks } from "../../modules/naver_module.js";

const router = express.Router();

router.get("/naver", async (req, res) => {
  const search = req.query?.search;
  if (!search) {
    return res.json({ CODE: 404, MSG: "Not Search Text" });
  }
  let resultBooks;
  try {
    resultBooks = await getBooks(search);
  } catch (e) {
    return res.json({ CODE: 500, MSG: "네이버 조회 오류" });
  }
  return res.json({ CODE: 200, MSG: resultBooks });
});
router.post("/input", (req, res) => {});
router.get("/detail/:isbn", (req, res) => {});
router.get("/user/:uername", (req, res) => {});

export default router;
