"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);

router.get("/login", ctrl.login);

module.exports = router; // 외부에서 사용 가능하게 (app.js에서 사용이 가능해야하니까)