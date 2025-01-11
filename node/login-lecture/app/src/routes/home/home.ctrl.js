"use strict";

const UserStorage = require("../../models/UserStorage"); // UserStorage 클래스 가져오기

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
    const id = req.body.id,
      password = req.body.password;

    const users = UserStorage.getUsers("id", "password");
    const response = {}; // 응답 객체
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.password[idx] === password) {
        response.success = true;
        return res.json(response);
      }
    }
    response.success = false;
    response.msg = "로그인에 실패하였습니다.";
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
