"use strict";

import Sequelize from "sequelize";
import process from "process";
import initModels from "./init-models.js";

// 현재 사용하는 프로젝트 환경을 env.NODE_ENV 변수를 참조하여 가져와라
// 만약 그 변수가 설정되어 있지 않다면 developement 문자열로 설정하라
const env = process.env.NODE_ENV || "development";

// config.js 파일의 변수를 통째로 가져와라
import configJS from "../config/config.js";
// config.js 파일의 변수중에 env(development) 변수만 가져와서 config 에 할당
const config = configJS[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// 주의!! 대문자 Sequelize, 소문자 sequelize 변수 선언
// 절대 지우거나 변수명 변경 금지
db.sequelize = sequelize;

// models 폴더에 있는 tbl_*.js 파일들에 설정된
// table 정보를 모두 수집하여 models 변수에 저장해라
db.models = initModels(sequelize);

// module.exports = db;
export default db;
