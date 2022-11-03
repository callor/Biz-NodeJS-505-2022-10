import express from "express";
import mysql from "../modules/mysqlDB.js";
const router = express.Router();

router.get("/", (req, res) => {
  let st_name = req.query.st_name;
  let sql = "SELECT * FROM tbl_student ORDER BY st_num";
  if (st_name) {
    sql = ` SELECT * FROM tbl_student 
        WHERE st_name LIKE CONCAT('%', ?, '%') 
        ORDER BY st_num `;
  } else {
    st_name = "";
  }
  mysql.execute(sql, [st_name], (err, students, field) => {
    // res.json(students);
    // 내부에서(Mysql select 된 데이터) 만들어진 데이터를
    // students 라는 이름의 변수에 저장하여 render 에게 보낸다
    // res.render("student",{students:students})
    res.render("student/st_main", { body: "list", students });
  });
});

router.get("/insert", (req, res) => {
  res.render("student/st_main", { body: "write" });
});

router.post("/insert", (req, res) => {
  const student = req.body;
  console.log(student);
  const sql = `INSERT INTO tbl_student(
            st_num,st_name, st_dept, st_grade, st_tel, st_addr
            ) VALUES (
              ?,?,?,?,?,?
            )`;
  mysql.execute(sql, Object.values(student), (err, result, field) => {
    if (err) {
      console.error(err);
    }
    res.redirect(`/student?st_name=${student.st_name}`);
  });
});

export default router;
