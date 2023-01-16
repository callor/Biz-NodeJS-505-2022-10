import express from "express";
import DB from "../models/index.js";
const USER = DB.models.tbl_users;
const router = express.Router();

router.get("/join", async (req, res, next) => {
  const user = { username: "", password: "", re_password: "" };
  return res.render("users/join", { ERROR: { CODE: 0 }, USER: user });
});

router.post("/join", (req, res) => {
  const { username, password, re_password } = req.body;
  const resultError = { CODE: 0, MESSAGE: "" };

  if (!username) {
    resultError.CODE = 1;
    resultError.MESSAGE = "* USERNAME 은 필수 항목입니다";
    return res.render("users/join", { ERROR: resultError, USER: req.body });
  }
  if (!password) {
    resultError.CODE = 2;
    resultError.MESSAGE = "* 비밀번호를 반드시 입력해 주세요";
    return res.render("users/join", { ERROR: resultError, USER: req.body });
  }
  if (!re_password) {
    resultError.CODE = 3;
    resultError.MESSAGE = "* 비밀번호 확인을 입력해 주세요";
    return res.render("users/join", { ERROR: resultError, USER: req.body });
  }
  if (password !== re_password) {
    resultError.CODE = 4;
    resultError.MESSAGE = "* 비밀번호와 비밀번호 확인이 서로 다릅니다";
    return res.render("users/join", { ERROR: resultError, USER: req.body });
  }

  /**
   * 비밀번호 암호화
   *
   */
});

export default router;
