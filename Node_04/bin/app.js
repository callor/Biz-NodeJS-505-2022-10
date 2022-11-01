import express from "express";
import path from "path";
import logger from "morgan";

const app = express();
app.use(logger("dev"));

// express 에 포함된 미들웨어(Middleware, 중간자 도구)

// form에서 POST method 로 데이터를 전송할때
// 그 데이터를 req.body 속성으로 부터 Getter 할수 있도록
// 도와주는 도구
app.use(express.urlencoded({ extended: false }));
/**
 * Web browser 에서 Request 를 보내면
 * http -> express -> router 의 과정을 거치면서 요청을 처리하고
 * router -> express -> http -> web browser 로 응답을 한다
 *
 * 하지만 static file(이미지, 단순 문서, 단순 파일 들)은
 * router 등에서 연산을 하지 않아도 되는 대상이다
 * 이러한 파일들을 static 저장소(../public)에 보관하고
 * 만 web browser 에서 요청을 하면
 * router 로 보내지 않고 express 가 바로 전달을 해 버린다
 */
app.use(express.static(path.join("./public")));

/**
 * path.join()
 * 파일을 핸들링(저장, 열기)할때 파일의 저장위치(경로,path)를
 * 정확히 지정해주어야 문제가 발생하지 않는다
 * 과거에는 운영체마다 경로를 지정하는 방식이 달랐다
 * 윈도우에서는 폴더의 구분을 역슬래시(\)를
 * unix, linux, mack 에서는 폴더의 구분을 슬래시(/)를 사용하는등
 * 많은 혼란이 있고, 개발자가 이런한 부분에서 많은 어려움을 겪었다
 * path.join() 함수는 운영체제를 확인하여 자동으로 경로를
 * 오류가 나지 않도록 만들어 주는 도구이다
 */
app.get("/", (req, res) => {
  console.log(path.join("./public", "images", "back.jpg"));
});

export default app;
