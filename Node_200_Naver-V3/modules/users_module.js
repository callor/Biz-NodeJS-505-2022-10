import DB from "../models/index.js";
import { system_error, join_error, login_error } from "../config/error_code.js";
import crypto from "crypto";

const USER = DB.models.tbl_users;

export const userJoin = async (user) => {
  const { username, password, re_password } = user;

  // USERNAME 입력하지 않았을때
  if (!username) throw new Error(JSON.stringify(join_error.REQ_USERNAME));

  // USERNAME 중복검사
  let resultUser;
  try {
    resultUser = await USER.findByPk(username);
    // throw new Error("이미 가입된 USERNAME")
  } catch (e) {
    console.log(e);
    throw new Error(system_error.SQL_ERROR);
  }
  if (resultUser) throw new Error(JSON.stringify(join_error.ORVERLAP_USERNAME));

  // 비번을 입력하지 않았을때
  if (!password) throw new Error(JSON.stringify(join_error.REQ_PASSWORD));

  // 비번 확인을 입력하지 않았을때
  if (!re_password) throw new Error(JSON.stringify(join_error.REQ_RE_PASSWORD));

  if (password !== re_password)
    throw new Error(JSON.stringify(join_error.MATCH_PASSWORD));

  /**
   * 비밀번호 암호화
   */
  const encPassword = crypto
    .createHash("sha512") // 암호화 알고리즘
    .update(user.password) // 평문 암호(입력된 암호)
    .digest("base64"); // 인코딩

  user.password = encPassword;

  /**
   * user table 의 u_level 칼럼 활용
   * 최초로 회원가입을 하면 그 사용자는 ADMIN 이다.
   *    그리고 level 은 0이다
   * 두번째 사용자 부터는 GUEST 또는 일반 사용자 이다
   *    여기에서는 level 을 9로 설정한다.
   */

  try {
    const userCount = await USER.count(); // 데이터의 개수 select
    if (userCount) {
      user.u_level = 9;
    } else {
      user.u_level = 0;
    }
  } catch (e) {
    console.log(e);
    throw new Error(JSON.stringify(system_error.SQL_ERROR));
  }

  try {
    await USER.create(user);
  } catch (e) {
    console.log("User Create", e.message);
    throw new Error(JSON.stringify(system_error.SQL_ERROR));
  }
}; // userJoin End

export const userLogin = async (user) => {
  const { username, password } = user;
  let findUser = {}; // 로그인에 성공한 사용자 정보를 return 할 준비

  if (!username) throw new Error(JSON.stringify(login_error.REQ_USERNAME));

  try {
    findUser = await USER.findByPk(username);
  } catch (e) {
    console.log("Find User", e);
    throw new Error(JSON.stringify(system_error.SQL_ERROR));
  }

  if (!findUser) throw new Error(JSON.stringify(login_error.MATCH_USERNAME));

  if (!password) throw new Error(JSON.stringify(login_error.REQ_PASSWORD));

  const encPassword = crypto
    .createHash("sha512")
    .update(password)
    .digest("base64");

  if (encPassword !== findUser.password)
    throw new Error(JSON.stringify(login_error.MATCH_PASSWORD));
  return findUser;
};
