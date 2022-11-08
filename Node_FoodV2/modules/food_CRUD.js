const TD_SELECT_ALL = `
    SELECT * FROM tbl_todayv2 ORDER BY t_date DESC, t_time DESC
`;
const TD_FIND_BY_ID = `
    SELECT * FROM tbl_todayv2 WHERE t_seq = ?
`;

const TD_INSERT = `
    INSERT INTO tbl_todayV2(t_date, t_time, t_content, t_qty, t_cal)
    VALUES(?,?,?,?,?)
`;
const TD_UPDATE = `
    UPDATE tbl_todayV2 
        SET t_date = ?,
            t_time = ?,
            t_content = ?,
            t_qty = ?,
            t_cal = ?
        WHERE t_seq = ?
`;
const TD_DELETE = `
    DELETE FROM tbl_todayV2
        WHERE t_seq = ?
`;

// 날짜 범위별 리스트
const TD_DATE_LIST = `
    SELECT * FROM tbl_todayV2
        WHERE t_date BETWEEN ? AND ?
    ORDER BY t_date DESC, t_time DESC
`;

// 칼로리 량 별 리스트
const TD_CAL_LIST = `
    SELECT * FROM tbl_todayV2
    ORDER BY t_cal DESC
`;
// 섭취 칼로리 량 별 리스트
const TD_CAL_SUM_LIST = `
    SELECT *, t_qty * t_cal AS t_total FROM tbl_todayV2
    ORDER BY (t_qty * t_cal) DESC
`;

export {
  TD_SELECT_ALL,
  TD_FIND_BY_ID,
  TD_INSERT,
  TD_UPDATE,
  TD_DELETE,
  TD_DATE_LIST,
  TD_CAL_SUM_LIST,
  TD_CAL_LIST,
};
