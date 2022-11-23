/**
 * mongoDB 를 사용하여 BBS(게시판) 데이터를 저장하는
 * ORM(ODM) model 선언
 */
import mongoose from "mongoose";
const bbsModel = mongoose.Schema({
  b_date: String,
  b_time: String,
  b_writer: String,
  b_subject: String,
  b_content: String,
  b_count: Number,
});

/**
 * bbsModel 에 설정된 칼럼 정보를 사용하여
 * tbl_bbs Collection(table에 해당)을 사용하겠다
 */
export default mongoose.model("tbl_bbs", bbsModel);
