/* express 모듈을 사용한 서버 구동 */
// 서버의 중심 파일 - express 프레임워크

// npm i express --save 로 모듈 설치
// node app.js로 서버 가동
// localhost:3000으로 접속하여 서버가 가동 되는지 확인

//모듈
const express = require("express");
const app = express();

const PORT = 3000;
// 라우팅
const home = require("./src/routes/home"); // home.js 파일을 가져옴

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs"); // npm i ejs -s 필요

app.use("/", home); //  use - 미들웨어를 등록해주는 메서드

module.exports = app;

