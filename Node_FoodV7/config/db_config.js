export default {
  development: {
    username: "root",
    password: "!Biz8080",
    database: "fooddb",
    host: "127.0.0.1",
    dialect: "mysql",
    // logging 속성은 기본값이 true : SQL 명령실행 내용을 Console 출력
    // false : SQL 명령실행 내용을 보이지 않기
    // sequelize 최근 버전에서는 true 로 설정하면 경고가 나타난다
    // true 로 설정을 하지말고 속성 자체를 주석처리하라
    // logging: false,
  },
  test: {
    username: "root",
    password: "password",
    database: "sample",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: "password",
    database: "sample",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
