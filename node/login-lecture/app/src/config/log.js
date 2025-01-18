const fs = require("fs");
const appRoot = require("app-root-path"); // 루트 경로를 가져와주는 모듈, npm i app-root-path -s 필요

const accessLogStream = fs.createWriteStream(`${appRoot}/log/access.log`, {
  flags: "a",
});

module.exports = accessLogStream;
