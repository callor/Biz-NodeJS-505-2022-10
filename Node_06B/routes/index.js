import express from "express";
import mysql from "../modules/mysqlDB.js";

const router = express.Router();

router.get("/", (req, res) => {
  const sql = `SELECT * 
      FROM tbl_student 
      ORDER BY st_num
      LIMIT 0, 20`;
  mysql.execute(sql, (err, students, field) => {
    res.render("index", { students });
  });
});

export default router;
