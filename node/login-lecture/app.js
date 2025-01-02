/* http 모듈을 사용한 서버 구동
const http = require("http"); // http는 내장 모듈
// http는 if문으로 url 처리도 해줘야하고, 한글 처리까지 해줘야하기 때문에 express를 쓴다.
const app = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // 한글 처리
  if (req.url === "/") {
    res.end("여기는 루트입니다");
  } else if (req.url === "/login") {
    res.end("여기는 로그인 화면입니다.");
  }
});

app.listen(3001, () => {
  console.log("http로 서버 가동");
});
*/

/* express 모듈을 사용한 서버 구동 */
// 서버의 중심 파일 - express 프레임워크
const express = require("express");
const app = express();

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs"); // npm i ejs -s 필요

app.get("/", (req, res) => {
  // 브라우저에서 루트 경로로 요청이 들어왔을 때 실행할 코드
  res.render("home/index");
});

app.get("/login", (req, res) => {
  res.render("home/login");
});

app.listen(3000, function () {
  console.log("서버 가동");
});

// npm i express --save 로 모듈 설치
// node app.js로 서버 가동
// localhost:3000으로 접속하여 서버가 가동 되는지 확인
