"use strict";

const UserStorage = require("../../models/UserStorage"); // UserStorage 클래스 가져오기
const User = require("../../models/User"); // User 클래스 가져오기
const logger = require("../../config/logger");

// get 방식으로 접속했을 때, 렌더링 할 수 있게 오브젝트로 생성
const output = {
  home: (req, res) => {
    logger.info(`GET / 200 "홈 화면으로 이동"`);
    res.render("home/index");
  },
  login: (req, res) => {
    logger.info(`GET /login 200 "로그인 화면으로 이동"`);
    res.render("home/login");
  },
  register: (req, res) => {
    logger.info(`GET /register 200 "회원가입 화면으로 이동"`);
    res.render("home/register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    if (response.err) {
      logger.error(
        `POST /login 500 Response: "success: ${response.success}, msg: ${response.err}"`
      );
    } else {
      logger.info(
        `POST /login 200 Response: "success: ${response.success}, msg: ${response.msg}"`
      );
    }
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    if (response.err) {
      logger.error(
        `POST /login 500 Response: "success: ${response.success}, msg: ${response.err}"`
      );
    } else {
      logger.info(
        `POST /login 200 Response: "success: ${response.success}, msg: ${response.msg}"`
      );
    }
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
