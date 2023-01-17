import DB from "../models/index.js";
import { system_error, join_error } from "../config/error_code.js";
import crypto from "crypto";

const USER = DB.models.tbl_users;

export const userJoin = async (user) => {
  const { username, password, re_password } = user;

  // USERNAME 입력하지 않았을때
  if (!username) throw new Error(JSON.stringify(join_error.REQ_USERNAME));

  let resultUser;
  try {
    resultUser = await USER.findByPk(username);
  } catch (e) {
    console.log(e);
    throw new Error(system_error.SQL_ERROR);
  }

  // 비번을 입력하지 않았을때
  if (!password) throw new Error(JSON.stringify(join_error.REQ_PASSWORD));

  // 비번 확인을 입력하지 않았을때
  if (!re_password) throw new Error(JSON.stringify(join_error.REQ_RE_PASSWORD));

  if (password !== re_password)
    throw new Error(JSON.stringify(join_error.MATCH_PASSWORD));

  /**
   * 비밀번호 암호화
   *
   */
};
