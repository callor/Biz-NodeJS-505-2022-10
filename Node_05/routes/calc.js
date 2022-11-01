import express from "express";
const router = express.Router();

// http://localhost:3000/calc 요청
router.get("/", (req, res) => {
  res.render("calc");
});

router.get("/add", (req, res) => {
  res.send("Useage http://localhost:3000/숫자1/숫자2");
});
router.get("/add/:num1", (req, res) => {
  res.send("숫자 2개를 보내세요 /num1/num2");
});
router.get("/add/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const sum = Number(num1) + Number(num2);
  // res.send(`${num1} + ${num2} = ${sum}`);
  const result = {
    num1: num1,
    num2: num2,
    sum: sum,
  };
  res.render("calc", result);
});

export default router;
