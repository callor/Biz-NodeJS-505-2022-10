import express from "express";
import path from "path";
import logger from "morgan";

// routes
import calcRouter from "../routes/calc.js";
import coutryRouter from "../routes/country.js";

const app = express();
app.use(logger("dev"));

// express 에 포함된 미들웨어(Middleware, 중간자 도구) 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join("public")));

// PROJECT/views 폴더를 views 이름으로 세팅
app.set("views", path.join("views"));
app.set("view engine", "ejs");

// RequestMapping 과 router 를 연결하기
app.use("/calc", calcRouter);
app.use("/country", coutryRouter);

export default app;
