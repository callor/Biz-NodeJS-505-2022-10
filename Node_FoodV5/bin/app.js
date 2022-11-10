/**
 * express generator ES6+ template
 * @author : callor@callor.com
 * @since : 2020-12-10
 * @update : 2022-11-01
 * @see : nodejs + express 프로젝트에서 ES6+ 문법을 사용하기 위한 template
 */

// essential modules
import express from "express";
import createError from "http-errors";
import path from "path";

// 3rd party lib modules
import cookieParser from "cookie-parser";
import logger from "morgan";

// sequelize Model import
import DB from "../models/index.js";

// sample router modules
import indexRouter from "../routes/index.js";
import usersRouter from "../routes/users.js";

// create express framework
const app = express();

// DB 접속 start
// Callback 방식으로 사용하기
// DB 연결을 기다리지 않고 Web APP Server 기능을 세팅하고 시작한다
DB.sequelize.sync().then((dbConn) => {
  console.log(dbConn.options.host, "DB 연결 OK~~~");
  console.log(dbConn.config.database, "에  연결");
});

// Promise 방식으로 사용하기
// DB 연결이 완료 될때까지 Web APP Server 세팅 및 시작을 보류한다
// const dbConn = await DB.sequelize.sync();
// console.log(dbConn.options.host, "DB 연결 OK~~~");
// console.log(dbConn.config.database, "에  연결");

// Disable the fingerprinting of this web technology.
app.disable("x-powered-by");

// view engine setup
app.set("views", path.join("views"));
app.set("view engine", "pug");

// middleWare enable
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join("public")));

// router link enable
// app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
