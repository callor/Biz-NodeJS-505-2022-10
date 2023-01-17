/**
 * express generator ES6+ Template
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
import DB from "../models/index.js";

// store 도구 import
import session from "express-session";
import sessionSequelize from "connect-session-sequelize";

// router modules
import indexRouter from "../routes/index.js";
import usersRouter from "../routes/users.js";
import bookRouter from "../routes/book.js";

// API router
import userAPIRouter from "../routes/api/user_api.js";
import bookAPIRouter from "../routes/api/book_api.js";

// create express framework
const app = express();

DB.sequelize.sync({ force: false }).then((dbConn) => {
  console.log(dbConn.options.host, dbConn.config.database, "DB Connection OK");
});

/**
 * session 을 저장 관리할 DB store 설정하기
 */
// express session의 Store 를 sessionSequelize 에게 보내서
// 클래스 생성하기
const SessionStore = sessionSequelize(session.Store);
// sessionStore 생성하기
const sessionStore = new SessionStore({
  db: DB.sequelize,
  expiration: 1000 * 60, // 1분간 유지하기
  // 만료된(expire) 세션을 DB 로 부터 자동 삭제하는 간격
  checkExpirationInterval: 1000 * 60 * 10,
});
// session 설정하기
app.use(
  session({
    key: "my-books", // session ID
    secret: "!Biz12341234", // session 암호화 key
    resave: false,
    saveUninitialized: false,
    store: sessionStore, // 세션을 보관을 장소 지정
    cookie: {
      maxAge: 1000 * 60, // store expiration 와 같은 시각
    },
  })
);

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

// session 에 담긴 정보를 pug view 에서 활용 하기 위한 설정
// 이 설정은 반드시 router 위에 코딩한다
app.use((req, res, next) => {
  if (req?.session?.user) {
    res.locals.user = req.session.user;
  }
  next(); // 라우터로 req 정보 전달하여 주기
});

// router link enable
app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/book", bookRouter);

app.use("/api/user", userAPIRouter);
app.use("/api/book", bookAPIRouter);

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
