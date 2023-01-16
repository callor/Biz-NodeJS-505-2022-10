/**
 * > X-Naver-Client-Id: {애플리케이션 등록 시 발급받은 클라이언트 아이디 값}
 * > X-Naver-Client-Secret: {애플리케이션 등록 시 발급받은 클라이언트 시크릿 값}
 *
 * Naver 개발자센터에서 발급받은 애플리케이션 Id Secret 를
 * 다음 VALUE 항목에 추가한 후 이 파일을 naver_config.js 로 이름변경하여
 * 프로젝트 시작할 것
 *
 */
const CLIENT_ID = { KEY: "X-Naver-Client-Id", VALUE: "YOUR CLIENT ID" };
const CLIENT_SECRET = {
  KEY: "X-Naver-Client-Secret",
  VALUE: "YOUR CLIENT SECRET",
};
const BOOK_URL_JSON = "https://openapi.naver.com/v1/search/book.json";

export { CLIENT_ID, CLIENT_SECRET, BOOK_URL_JSON };
