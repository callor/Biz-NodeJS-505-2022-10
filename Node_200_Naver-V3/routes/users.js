import express from "express";
import { userJoin, userLogin } from "../modules/users_module.js";
const router = express.Router();

router.get("/join", async (req, res, next) => {
  const user = { username: "", password: "", re_password: "" };
  return res.render("users/join", { ERROR: { CODE: 0 }, USER: user });
});

router.post("/join", async (req, res) => {
  try {
    await userJoin(req.body);
    return res.redirect("/");
  } catch (e) {
    return res.render("users/join", {
      ERROR: JSON.parse(e.message),
      USER: req.body,
    });
  }
});

router.get("/login", (req, res) => {
  const user = { username: "", password: "", re_password: "" };
  return res.render("users/login", { ERROR: { CODE: 0 }, USER: user });
});

router.post("/login", async (req, res) => {
  let resultUser = {};
  try {
    resultUser = await userLogin(req.body);
    // session 에 데이터를 저장할때는 비번과 같은 민감한 정보는
    // 삭제해 주는 것이 좋다
    resultUser.password = null;
    req.session.user = resultUser;

    // return res.json(resultUser);
    return res.redirect("/");
  } catch (e) {
    console.log(e);
    return res.render("users/login", {
      ERROR: JSON.parse(e.message),
      USER: req.body,
    });
  }
});

router.get("/logout", (req, res) => {
  req.session.user = null;
  const sendStr = `
  <script>
    alert("로그아웃 되었습니다")
    document.location.href ="/"
  </script>
  `;
  return res.send(sendStr);
});

export default router;
