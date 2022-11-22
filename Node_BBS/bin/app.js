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
import { Db, MongoClient } from "mongodb";
import { atliasURL } from "../config/mongoDB.js";

// sample router modules
import indexRouter from "../routes/index.js";
import usersRouter from "../routes/users.js";

// create express framework
const app = express();

const client = new MongoClient(atliasURL);
// connection 함수를 만들고
// const connection = async () => {
//   await client.connect();
//   console.log("MongoDB Connect OK");
// };
// 함수를 즉시 실행하기
// connection()

// 익명(무명)함수를 선언하고 즉시 실행하기
// 일회성 실행함수, 즉시 실행함수
// Server 가 시작 될때 DB 연결이 잘 되는지 확인하는 절차
(async () => {
  await client.connect();
  console.log("MongoDB Connect OK");
  client.close();
})();

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
