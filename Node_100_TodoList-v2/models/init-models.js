// import _tbl_sample from "./sample_model.js";
import _tbl_todolist from "./tbl_todolist.js";
const initModels = (sequelize) => {
  const tbl_todolist = _tbl_todolist(sequelize);
  return {
    tbl_todolist,
  };
};

export default initModels;
