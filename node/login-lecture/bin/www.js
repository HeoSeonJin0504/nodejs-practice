"use strict";
// app.listen() 모듈화

const app = require("../app");
const PORT = 3000;

// 서버 실행
app.listen(PORT, () => {
  console.log("서버 가동");
});
