import express from "express";
import upload from "../modules/file_upload.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("products/list");
});

router.get("/insert", (req, res) => {
  res.render("products/write");
});

/**
 * router 에 middleWare 끼워 넣기
 * router 의 함수 "(req,res) =>{}" 는 text 데이터를 수신하는 용도이다
 * 지금 form 에서 multipart/form-data 로 이미지가 포함된 데이터가
 *    전송되어 왔다
 * 이 데이터를 중간에 upload.single() 함수에게 전달하여 이미지 관련
 *    처리를 먼저 수행하도록 하는 것
 */
router.post("/insert", upload.single("p_image_file"), (req, res) => {
  console.log(req.body);
  // res.json(req.file);
  const fileName = req?.file?.filename;
  req.body.p_vat = req.body?.p_vat || 0;
  const body = req.body;
  res.json({
    fileName,
    body,
  });

  // res.render("products/detail", { fileName });
});
export default router;
