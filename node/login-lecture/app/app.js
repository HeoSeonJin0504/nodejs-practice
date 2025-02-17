/* express 모듈을 사용한 서버 구동 */
// 서버의 중심 파일 - express 프레임워크

// npm i express --save 로 모듈 설치
// node app.js로 서버 가동
// localhost:3000으로 접속하여 서버가 가동 되는지 확인

//모듈
const express = require("express");
const bodyParser = require("body-parser"); // npm i body-parser -s 필요
const dotenv = require("dotenv"); // npm i dotenv -s 필요

const app = express();
dotenv.config();

// 라우팅
const home = require("./src/routes/home"); // home.js 파일을 가져옴

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs"); // npm i ejs -s 필요

app.use(express.static(`${__dirname}/src/public`)); // 현재 app.js 파일 위치/src/public 경로를 정적경로로 추가
app.use(bodyParser.json()); // json 형태로 데이터를 받아올 수 있게 설정
app.use(bodyParser.urlencoded({ extended: true })); // URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결

// 미들웨어를 설정하는 부분이 라우팅 설정보다 먼저 와야 한다!!!
app.use("/", home); //  use - 미들웨어를 등록해주는 메서드

module.exports = app;
