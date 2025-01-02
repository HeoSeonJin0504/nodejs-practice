// 서버의 중심 파일 - express 프레임워크
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // 브라우저에서 루트 경로로 요청이 들어왔을 때 실행할 코드
  res.send("여기는 루트입니다.");
});

app.get("/login", (req, res) => {
  res.send("여기는 로그인 화면입니다.");
});

app.listen(3000, function () {
  console.log("서버 가동");
});

// npm i express --save 로 모듈 설치
// node app.js로 서버 가동
// localhost:3000으로 접속하여 서버가 가동 되는지 확인
