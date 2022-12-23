import express from "express";
import DB from "../models/index.js";
const router = express.Router();
const TODO = DB.models.tbl_todolist;

router.get("/", async (req, res, next) => {
  try {
    // const result = await TODO.findAll();
    // return res.json(result);
    return next();
  } catch (err) {
    console.log(err);
    return res.json({ error: "SELECT 오류" });
  }
});

router.get("/insert", (req, res) => {
  return res.render("write");
});
/**
 * form 으로 부터 전달된 데이터를 DB table 에 추가하고
 * DB table 전체 리스트를 JSON 으로 응답하는 코드
 */
router.post("/insert", async (req, res, next) => {
  // form 에서 수신된 입력데이터를 data 변수에 담고
  const data = req.body;
  try {
    // table 에 insert 수행
    await TODO.create(data);
    // 전체데이터를 select 하여
    // const todoList = await TODO.findAll();
    // json type 으로 보내주기
    // return res.json(todoList);
    return next();
  } catch (err) {
    console.log(err);
    // 만약 오류가 발생하면 정해진 규칙대로 응답하기
    return res.json({ error: "SQL ERROR" });
  }
});
router.put("/update", async (req, res, next) => {
  const data = req.body;
  console.log(data);

  try {
    await TODO.update(data, { where: { id: data.id } });
    return next();
  } catch (error) {
    console.log(error);
  }
});
router.delete("/delete/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    await TODO.destroy({ where: { id } });
    return next();
  } catch (error) {
    console.log(error);
    return res.json({ error: "삭제 오류" });
  }
});

router.put("/complete/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const todo = await TODO.findByPk(id);
    console.log(todo);
    await TODO.update(
      { ...todo, e_date: todo.e_date ? "" : "000" },
      { where: { id } }
    );
    return next();
  } catch (error) {
    console.log(error);
    return res.json({ error: "업데이트 오류" });
  }
});

/**
 * 각 router next() 함수가 실행되면
 * 요청을 또한번 처리할 router
 * url "/**" ANT pattern
 * "/*" 로 처리하면 "/aa", "/bb", "/cc" 만 처리
 * "/**" 로 처리하면 "/aa", "/aa/bb" , "/aa/cc/dd" 등 모두 처리
 *
 */
router.all("/**", async (req, res) => {
  try {
    const result = await TODO.findAll();
    return res.json(result);
  } catch (error) {
    return res.json({ error: "SELECT 오류" });
  }
});

/**
 * GET /todo/aaa 요청이 들어왔을때
 * 위의 router 들이 처리할수 있는 URL 에 필터링이 되지 않으면
 * 다음의 router 가 요청을 수신, 처리한다.
 */
router.get("/:id", (req, res) => {
  // return res.send("단일 데이터");
  return res.send("404 NOT Found");
});

export default router;
