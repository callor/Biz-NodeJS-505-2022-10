import express from "express";
const router = express.Router();

/* GET users listing. */
router.get("/login", function (req, res, next) {
  req.session.user = {
    username: "callor",
    real_nale: "홍길동",
    user_role: 1,
  };
  req.session.save(() => {
    res.json(req.session.user);
  });
});

export default router;
