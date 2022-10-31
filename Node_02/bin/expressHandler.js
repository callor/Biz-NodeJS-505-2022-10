/**
 * 함수를 선언하여 모듈 만들기
 */
const expressHandler = (server) => {
  server.on("listening", () => {
    console.log("Server Listen Wait...");
  });
  server.on("connection", () => {
    console.log("Server Connection");
  });
};

export default expressHandler;
