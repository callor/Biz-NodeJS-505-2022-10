import express from "express";
import { userJoin } from "../modules/users_module.js";
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

export default router;
