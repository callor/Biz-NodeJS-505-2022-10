/**
 * nodejs 프로젝트 시작점(Start Point)
 * nodejs 프로젝트에서 제일먼저 시작되는 코드
 */
import http from "http";
import serverEvent from "./expressHandler.js";
import app from "./app.js";
const server = http.createServer(app);
const hostConfig = {
  host: "localhost",
  port: 3000,
};
server.listen(hostConfig);
serverEvent(server);
