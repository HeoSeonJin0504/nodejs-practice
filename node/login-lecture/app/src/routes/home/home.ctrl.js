"use strict";

const UserStorage = require("../../models/UserStorage"); // UserStorage 클래스 가져오기
const User = require("../../models/User"); // User 클래스 가져오기
const logger = require("../../config/logger");

// get 방식으로 접속했을 때, 렌더링 할 수 있게 오브젝트로 생성
const output = {
  home: (req, res) => {
    logger.info(`GET / 304 "홈 화면으로 이동"`);
    res.render("home/index");
  },
  login: (req, res) => {
    logger.info(`GET /login 304 "로그인 화면으로 이동"`);
    res.render("home/login");
  },
  register: (req, res) => {
    logger.info(`GET /register 304 "회원가입 화면으로 이동"`);
    res.render("home/register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    const url = {
      method: "POST",
      path: "/login",
      status: response.err ? 400 : 200,
    };
    log(response, url);
    return res.status(url.status).json(response);
  },

  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    const url = {
      method: "POST",
      path: "/register",
      status: response.err ? 409 : 201, // 회원가입의 경우 새로운 데이터를 생성하기 때문에 201
    };
    log(response, url);
    return res.status(url.status).json(response);
  },
};

module.exports = {
  output,
  process,
};

const log = (response, url) => {
  if (response.err) {
    logger.error(
      `${url.method} ${url.path} ${url.status} Response: ${response.success}, msg: ${response.err}`
    );
  } else {
    logger.info(
      `${url.method} ${url.path} ${url.status} Response: ${response.success}, msg: ${response.msg || ""}`
    );
  }
};
