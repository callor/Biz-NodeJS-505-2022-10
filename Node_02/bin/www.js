/**
 * nodejs 프로젝트 시작점(Start Point)
 * nodejs 프로젝트에서 제일먼저 시작되는 코드
 */
import http from "http";
import serverEvent from "./expressHandler.js";

/**
 * http 방식의 Server 에 express Framework 연결
 */
// import express from "express";
// const app = express();
// express framework module 을 직접 선언하기 않고
// import 하여 사용하기
// from "./app.js" : 현재 폴더의
//          app.js 모듈 파일을 가져와서
//          app 이라는 이름으로 사용하겠다
import app from "./app.js";
const server = http.createServer(app);
// server.listen(3000, "localhost", () => {
//   console.log("Start Server");
// });

// 시작할 host 의 Ip Adress 와 port 를 JSON 객체로 선언
const hostConfig = {
  host: "localhost",
  port: 3000,
};
// 서버 연결정보 JSON 객체를 매개변수로 전달하여 서버 시작
server.listen(hostConfig);
serverEvent(server);

// routing 코드를 app.js 로 이동
// app.get("/", (req, res) => {
//   res.send("반갑습니다 나는 Nodejs Web App Server 입니다");
// });
