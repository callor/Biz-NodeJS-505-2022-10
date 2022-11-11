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

// MySQL Sequelize
/**
 * 각 모듈들을 저장하는 폴더의 기본 파일을 index.js 로 만드는 이유
 * commonJS( ES6 이전버전 )에서 모듈을 import 할때 다음과 같은 코드를
 * 사용했다
 * const DB = require("../models")
 * 이 코드가 의미하는 바는 models 폴더에 index.js 파일이 있으면
 * 그 파일을 import 하라는 의미이다
 *
 *  */
import DB from "../models/index.js";

// sample router modules
import indexRouter from "../routes/index.js";
import usersRouter from "../routes/users.js";

// create express framework
const app = express();

// force 옵션
// true : 프로젝트가 시작될때마다 기존 table 을 DROP 하고
//    다시 create 한다
// false : 기본값, 기존 table 과 데이터는 그대로 유지한다
DB.sequelize.sync({ force: true }).then((dbConn) => {
  console.log(dbConn.options.host, dbConn.config.database, "DB Connection OK");
});

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
app.use("/", indexRouter);
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
