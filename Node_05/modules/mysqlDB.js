import mysql from "mysql2";
const connConfig = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "!Biz8080",
  database: "world",
};

const dbConn = mysql.createConnection(connConfig);
export default dbConn;
