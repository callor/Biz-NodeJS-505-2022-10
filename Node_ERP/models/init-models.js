import _tbl_sample from "./sample_model.js";
import _tbl_buyer from "./tbl_buyer.js";

const initModels = (sequelize) => {
  const tbl_sample = _tbl_sample(sequelize);
  const tbl_buyer = _tbl_buyer(sequelize);

  return {
    tbl_sample,
    tbl_buyer,
  };
};

export default initModels;
