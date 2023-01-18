export const user_res_code = {
  OK: { CODE: 200, MSG: {} },
  MATCH_NOT_USERNAME: {
    CODE: 401,
    SUB_CODE: "USERNAME",
    MSG: "USERNAME이 없음",
  },
  MATCH_NOT_PASSWORD: {
    CODE: 401,
    SUB_CODE: "PASSWORD",
    MSG: "PASSWORD 맞지 않음",
  },

  USER_NOT_SESSION: {
    CODE: 403,
    MSG: "로그인 정보 없음",
  },

  SYSTEM_SQL_ERROR: { CODE: 500, MSG: "SQL 오류 발생" },
};
