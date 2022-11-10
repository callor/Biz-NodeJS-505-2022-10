import mysql from "mysql2";

const mysqlConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "!Biz8080",
  database: "fooddb",
});

export default mysqlConn;
