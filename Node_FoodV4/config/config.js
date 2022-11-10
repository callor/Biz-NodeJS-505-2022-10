/**
 * sequelize-cli 가 생성한 config.json 객체 파일을
 * ES6 버전의 실제 변수 모듈로 생성하기 위하여
 * export default 를 설정한다
 */
export default {
  development: {
    username: "root",
    password: "!Biz8080",
    database: "foodDB",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: "!Biz8080",
    database: "foodDB",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: "!Biz8080",
    database: "foodDB",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
