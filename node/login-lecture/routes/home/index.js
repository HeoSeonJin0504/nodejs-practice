"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // 브라우저에서 루트 경로로 요청이 들어왔을 때 실행할 코드
  res.render("home/index");
});

router.get("/login", (req, res) => {
  res.render("home/login");
});

module.exports = router; // 외부에서 사용 가능하게 (app.js에서 사용이 가능해야하니까)