"use strict";

import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import process from "process";

// 현재 프로젝트 폴더경로를 __dirname 변수에 할당
const __dirname = path.resolve();

// 현재 사용하는 프로젝트 환경을 env.NODE_ENV 변수를 참조하여 가져와라
// 만약 그 변수가 설정되어 있지 않다면 developement 문자열로 설정하라
const env = process.env.NODE_ENV || "development";
// const config = require(__dirname + '/../config/config.json')[env];
// config.js 파일의 변수를 통째로 가져와라
const configJS = import(`file://${__dirname}/config/config.js`);
// config.js 파일의 변수중에 env(development) 변수만 가져와서 config 에 할당
const config = configJS.default[env];

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

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// 주의!! 대문자 Sequelize, 소문자 sequelize 변수 선언
// 절대 지우거나 변수명 변경 금지
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// module.exports = db;
export default db;
