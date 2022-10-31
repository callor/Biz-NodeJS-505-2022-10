/**
 * nodejs 프로젝트 시작점(Start Point)
 * nodejs 프로젝트에서 제일먼저 시작되는 코드
 */
import http from "http";

/**
 * http 방식의 Server 에 express Framework 연결
 */
import express from "express";
const app = express();
const server = http.createServer(app);
server.listen(3000, "localhost", () => {
  console.log("Start Server");
});

app.get("/", (req, res) => {
  res.send("반갑습니다 나는 Nodejs Web App Server 입니다");
});
