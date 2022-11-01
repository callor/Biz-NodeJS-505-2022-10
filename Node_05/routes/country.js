import express from "express";
import mysql from "../modules/mysqlDB.js";

const router = express.Router();

router.get("/", (req, res) => {
  const sql = "SELECT * FROM country ORDER BY name";
  mysql.query(sql, (err, result, field) => {
    /**
     * 국가 = {code, name, ...}
     * result = [ {국가},{국가},{국가} ]
     *
     *
     */
    // res.send(result);
    res.render("country", { countrys: result });
  });
});

// 주소창에 http://localhost:3000/country/list 입력하고
// Enter 를 눌렀을때 처리하는 URI
// 메뉴에서 link 를 클릭했을때 처리하는 URI
router.get("/list", (req, res) => {
  res.render("country", { countrys: [] });
});

router.post("/list", (req, res) => {
  // form 의 input 에 설정된 name(c_name) 변수값을 setter하여
  // name 변수에 저장
  const name = req.body.c_name;
  console.log(name);
  const sql =
    " SELECT * FROM country " + " WHERE name LIKE " + " CONCAT('%', ?, '%') ";
  mysql.execute(sql, [name], (err, countrys, field) => {
    res.render("country", { countrys });
  });
});

router.get("/:name/get", (req, res) => {
  const name = req.params.name;
  const sql = "SELECT * FROM country WHERE name = ? ORDER BY code";
  mysql.execute(sql, [name], (err, countrys, field) => {
    // res.json(result);
    res.render("country", { countrys });
  });
});

router.get("/:name/like", (req, res) => {
  const name = req.params.name;
  const sql =
    "SELECT * FROM country WHERE name LIKE CONCAT('%', ?, '%') ORDER BY code";
  mysql.execute(sql, [name], (err, countrys, field) => {
    // res.json(result);
    res.render("country", { countrys });
  });
});

export default router;
