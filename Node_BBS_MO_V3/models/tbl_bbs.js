/**
 * mongoDB 를 사용하여 BBS(게시판) 데이터를 저장하는
 * ORM(ODM) model 선언
 */
import mongoose from "mongoose";
import commentModel from "./tbl_comment.js";

const bbsModel = mongoose.Schema({
  b_date: String,
  b_time: String,
  b_writer: String,
  b_subject: String,
  b_content: String,
  b_count: Number,
  /**
   * bbs Model 에 comment Model 을
   * Sub Document 배열 형식으로
   * 추가하여 1:N  의 table 연관(Assocication)관계를 설정
   * RDBMS 에서는 2개의 table 을 생성하고 각각의 table을
   * JOIN 하는 연관관계를 생성한다
   * 하지만 mongoDB 에서는 Model 선언부만 별도로 만들뿐
   * 실제 데이터는 tbl_bbs Collection 에 함께 저장된다
   */
  b_comments: [commentModel],
});

/**
 * bbsModel 에 설정된 칼럼 정보를 사용하여
 * tbl_bbs Collection(table에 해당)을 사용하겠다
 */
export default mongoose.model("tbl_bbs", bbsModel);
