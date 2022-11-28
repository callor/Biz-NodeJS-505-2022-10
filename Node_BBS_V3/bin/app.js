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
import mongoose from "mongoose";
import { atlasURL } from "../config/mongoDB.js";

// sample router modules
import indexRouter from "../routes/index.js";
import usersRouter from "../routes/users.js";
import apiRouter from "../routes/api.js";

// create express framework
const app = express();

/**
 * mongoDB와 mongoose를 연동하는 프로젝트에서
 * 사용하는 event 핸들러를 위한 객체
 */
const dbConn = mongoose.connection;
// mongoose 를 통해서 mongoDB 에 접속이 정상적으로
// 되었을때 최초에 한번 실행되는 event 핸들러
dbConn.once("open", () => {
  console.log("MongoDB Open OK!!");
});
// db 연결후 문제가 발생하면 호출되는 event 핸들러
dbConn.on("error", (err) => {
  if (err) {
    console.error(err``);
  }
});

// mongoose 를 통하여 mongoDB 에 연결하기
// mongoDB 연결을 비동기(async) 방식으로 수행하기
await mongoose.connect(atlasURL);

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
app.use("/api", apiRouter);
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
