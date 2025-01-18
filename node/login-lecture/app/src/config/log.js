// morgan 코드를 모듈화하여 사용하기 위한 설정 파일

const fs = require("fs");
const appRoot = require("app-root-path"); // 루트 경로를 가져와주는 모듈, npm i app-root-path -s 필요

const accessLogStream = fs.createWriteStream(`${appRoot}/log/access.log`, {
  flags: "a",
});

module.exports = accessLogStream;
