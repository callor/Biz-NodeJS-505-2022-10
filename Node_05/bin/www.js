import http from "http";
import app from "./app.js";

const server = http.createServer(app);
const serverConfig = {
  host: "localhost",
  port: 3000,
};

server.on("listening", () => {
  console.log("Server Start Listening!!!");
  console.log(
    `Web Browser Connect http://${serverConfig.host}:${serverConfig.port}`
  );
});
server.listen(serverConfig);
