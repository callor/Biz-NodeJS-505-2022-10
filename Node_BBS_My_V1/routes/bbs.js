import express from "express";
import fileUp from "../modules/file_upload.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("bbs/list");
});

router.get("/insert", (req, res) => {
  res.render("bbs/write");
});

router.post("/insert", fileUp.single("b_upfile"), (req, res) => {
  // fileUp Middle ware 가 정상적으로 파일을 업로드 하고 나면
  // req 에 file 이라는 속성을 생성하고
  // 업로드한 파일 정보를 담아준다
  // router 코드에서 file 정보를 사용할수 있다
  const file = req.file;
  res.json(file);
});

export default router;
