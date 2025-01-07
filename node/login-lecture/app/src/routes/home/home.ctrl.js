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

const users = {
  id: ["test", "test1"],
  password: ["1234", "12345"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      password = req.body.password;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.password[idx] === password) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
        success: false,
        msg: "로그인에 실패했습니다.",
    });
  },
};

module.exports = {
  output,
  process,
};
