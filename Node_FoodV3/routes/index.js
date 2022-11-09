import {
  TD_SELECT_ALL,
  TD_FIND_BY_ID,
  TD_INSERT,
  TD_UPDATE,
  TD_DELETE,
  TD_DATE_LIST,
  TD_CAL_SUM_LIST,
  TD_CAL_LIST,
  TD_INSERT_OR_UPDATE,
} from "../modules/food_CRUD.js";
import mysqlConn from "../modules/mysqlDB.js";

import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  /**
   * Promise
   * mysqlConn.promise().execute() 함수가 실행되어
   * 데이터를 SELECT 하고
   * SELECT 완전하게 완료되면 다음 res.render() 가 실행되는 것을
   * 보장한다
   */
  try {
    /**
     *
     * mysqlConn.execute() 함수가 실행되었을때
     * 만약 SQL오류, 서버접속오류가 발생하면
     * exception(예외상황)
     *  = MySQL 서버에서 데이터가 정상적으로 도착할 것으로 생각했는데
     *    어떤 문제 발생하여 그렇지 못하다 라면
     *    이 상황에서 "exception" 이라는 event 가 발생한다
     * exception event 는 System 에서 발생하는 것으로 if 문 등으로
     * 처리를 할 수 없다.
     * 일반적으로 exception 이 발생하면 코드가 실행을 멈추고 메시지를
     * Console에 보여준다
     * 애플리케이션을 사용하는 사용자 입장에서는 Console 메시지를 확인 할수 없고
     * 중단된 애플리케이션을 바라만 보게 된다
     * 이러한 상황이 되면 (애플리케이션)사용자는 매우 당황하게 된다
     * 개발자는 이러한 상황을 미리 예측하여 적절한 처리를 해야 한다
     *
     * 하지만 if 문으로 처리가 불가능 하기 때문에
     * 대부분의 프로그래밍 언어에서는 try {} catch {} 형식의
     * exception event handling 코드를 제공해 주고 있다.
     *  try { exception event가 발생할 가능성이 있는 코드들 }
     *  catch(event) { exception event가 발생하면 처리할 코드들 }
     * 이러한 형식의 코드로 exception 을 적절하게 처리해야 한다
     */
    const [todays, field] = await mysqlConn.promise().execute(TD_SELECT_ALL);
    return res.render("index", { todays });
  } catch (error) {
    console.log(error);
    return res.send("오류가 발생함");
  }
});

/**
 * 배열의 전개 연산자를 이용한 배열 합치기
 * arr1 = [1,2,3,4,5]
 * arr2 = [9,8,7,6]
 * arr3 = [...arr1, ...arr2]
 * ? arr3 = [1,2,3,4,5,9,8,7,6]
 *
 */
router.post("/", async (req, res) => {
  const params = [...Object.values(req.body), ...Object.values(req.body)];
  console.log(params);
  /**
   * MySQL 의 INSERT ON DUPLICATE KEY SQL 을 사용하여
   * Insert Or Update 를 실행하려고 하면
   * parameter 로 사용되는 배열을 두번 나열해주어야 한다.
   * [t_set,t_date,...,  t_seq,t_date]
   * MySQL2 버그로 생각됨
   */
  try {
    await mysqlConn.promise().execute(TD_INSERT_OR_UPDATE, params);
  } catch (error) {
    console.log(error);
    // res.write(error);
    return res.end("Insert or Update SQL 문제 발생");
  }
  res.redirect("/");
});
export default router;
