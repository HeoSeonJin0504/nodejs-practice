"use strict";
// app.listen() 모듈화

const app = require("../app");
const logger = require("../src/config/logger");
const PORT = process.env.PORT || 3000;

// 서버 실행
app.listen(PORT, () => {
  logger.info(`${PORT} 포트에서 서버 가동`);
});
