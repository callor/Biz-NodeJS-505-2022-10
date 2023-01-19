export const OK_RES = {
  CODE: "OK",
  CODE_NUM: 200,
  MESSAGE: {},
};
export const USER_RES = {
  REQ_USERNAME: {
    CODE: "REQ_USERNAME",
    CODE_NUM: 400,
    SUB_CODE: "USERNAME",
    MESSAGE: "USERNAME은 필수 항목입니다.",
  },
  MATCH_NOT_USERNAME: {
    CODE: "MATCH_NOT_USERNAME",
    CODE_NUM: 401,
    SUB_CODE: "USERNAME",
    MESSAGE: "USERNAME이 없음",
  },
  OVERLAP_USERNAME: {
    CODE: "OVERLAP_USERNAME",
    CODE_NUM: 401,
    SUB_CODE: "USERNAME",
    MESSAGE: "이미 가입된 USERNAME 입니다",
  },

  REQ_PASSWORD: {
    CODE: "REQ_PASSWORD",
    CODE_NUM: 400,
    SUB_CODE: "PASSWORD",
    MESSAGE: "비밀번호는 필수 항목입니다.",
  },

  MATCH_NOT_PASSWORD: {
    CODE: "MATCH_NOT_PASSWORD",
    CODE_NUM: 401,
    SUB_CODE: "PASSWORD",
    MESSAGE: "PASSWORD 맞지 않음",
  },
  REQ_RE_PASSWORD: {
    CODE: "REQ_RE_PASSWORD",
    CODE_NUM: 400,
    SUB_CODE: "PASSWORD",
    MESSAGE: "비밀번호 확인을 입력해주세요.",
  },

  MATCH_NOT_RE_PASSWORD: {
    CODE: "REQ_PASSWORD",
    CODE_NUM: 400,
    SUB_CODE: "PASSWORD",
    MESSAGE: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
  },

  USER_NOT_CREATE: {
    CODE: "USER_NOT_CREATE",
    CODE_NUM: 500,
    MESSAGE: "비밀번호는 필수 항목입니다.",
  },

  USER_NOT_SESSION: {
    CODE: "USER_NOT_SESSION",
    CODE_NUM: 403,
    MESSAGE: "로그인 정보 없음",
  },

  LOGIN_FAIL: {
    CODE: "LOGIN_FAIL",
    CODE_NUM: 403,
    MESSAGE: "로그인 권한이 없습니다. 관리자에게 문의하세요",
  },
};

export const BOOK_RES = {
  BOOK_NOT_CREATE: {
    CODE: "BOOK_NOT_CREATE",
    CODE_NUM: 500,
    MESSAGE: "도서 정보를 저장할 수 없습니다",
  },
  MY_BOOK_NOT_CREATE: {
    CODE: "MY_BOOK_NOT_CREATE",
    CODE_NUM: 500,
    MESSAGE: "내 도서 정보를 저장할 수 없습니다",
  },
  BOOK_NOT_FOUND: {
    CODE: "BOOK_NOT_FOUND",
    CODE_NUM: 404,
    MESSAGE: "도서 정보를 찾을 수 없습니다",
  },
  MY_BOOK_NOT_FOUND: {
    CODE: "MY_BOOK_NOT_FOUND",
    CODE_NUM: 404,
    MESSAGE: "내 소장 도서목록에 없습니다",
  },
};

export const NAVER_RES = {
  NOT_SEARCH: {
    CODE: "NOT_SEARCH",
    CODE_NUM: 400,
    MESSAGE: "검색어가 없습니다",
  },
  NOT_FOUND: {
    CODE: "NOT_FOUND",
    CODE_NUM: 404,
    MESSAGE: "네이버 API 조회 결과가 없습니다",
  },

  FETCH_ERROR: {
    CODE: "FETCH_ERROR",
    CODE_NUM: 500,
    MESSAGE: "네이버 API Fetch 오류가 발생하였습니다",
  },
};

export const SYSTEM_RES = {
  SQL_ERROR: {
    CODE: "SQL_ERROR",
    CODE_NUM: 500,
    MESSAGE: "SQL 오류 발생 관리자에게 문의",
  },

  FETCH_ERROR: {
    CODE: "FETCH_ERROR",
    CODE_NUM: 500,
    MESSAGE: "API 서버로 부터 데이터를 가져올 수 없음 관리자에게 문의",
  },
  JSON_ERROR: {
    CODE: "JSON_ERROR",
    CODE_NUM: 500,
    MESSAGE: "JSON Data Type 변환 오류 관리자에게 문의",
  },
  INTERNAL_ERROR: {
    CODE: "INTERNAL_ERROR",
    CODE_NUM: 500,
    MESSAGE: "서버 내부 연산중 오류 발생 관리자에게 문의",
  },
};
