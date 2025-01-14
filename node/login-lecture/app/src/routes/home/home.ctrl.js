"use strict";

const UserStorage = require("../../models/UserStorage"); // UserStorage 클래스 가져오기
const User = require("../../models/User"); // User 클래스 가져오기

// get 방식으로 접속했을 때, 렌더링 할 수 있게 오브젝트로 생성
const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
