"use strict";

// get 방식으로 접속했을 때, 렌더링 할 수 있게 오브젝트로 생성
const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    console.log(req.body);
  },
};

module.exports = {
  output,
  process,
};
