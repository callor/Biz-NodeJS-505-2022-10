import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const welcome = {
    status: 200,
    message: "반갑습니다",
  };
  res.json(welcome);
});

router.get("/student", (req, res) => {
  const st_name = req.query.st_name;
  const resResult = {
    status: 200,
    message: `${st_name} 학생의 데이터 응답`,
  };
  res.json(resResult);
});

router.post("/student", (req, res) => {
  const st_name = req.body.st_name;
  const result = {
    status: 200,
    message: `${st_name} 학생의 데이터 추가 성공~~`,
  };
  res.json(result);
});

router.put("/student", (req, res) => {
  const { st_name, st_grade, st_dept } = req.body;
  const result = {
    status: 200,
    message: `${st_name} 학생의 학과를 ${st_dept}, 학년을 ${st_grade}로 변경`,
  };
  res.json(result);
});

router.delete("/student/:stname", (req, res) => {
  //   const stname = req.body.st_name;
  const stname = req.params.stname;
  const result = {
    status: 200,
    message: `${stname} 학생 데이터 삭제 성공~~`,
  };
  res.json(result);
});

router.get("/student/:st_num", (req, res) => {
  const st_num = req.params.st_num;
  const student = {
    st_num,
    st_name: "홍길동",
    st_dept: "전자공학",
    st_grade: 3,
    st_addr: "서울특별시",
    st_tel: "010-111-1111",
  };
  /**
   * HTML RESTFul 응답을 하기 위하여
   * NodeJS pug template 와 데이터를 rendering 하여
   * 클라이언트에게 Response(응답)한다
   */
  res.render("api/student", { student });
});

export default router;
