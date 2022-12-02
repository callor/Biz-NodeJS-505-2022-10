import mongoose from "mongoose";
const { Schema } = mongoose;
const commentModel = new Schema({
  ct_date: String,
  ct_time: String,
  ct_writer: String,
  ct_comment: String,
});
export default commentModel;
