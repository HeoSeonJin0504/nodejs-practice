"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login);

module.exports = router; // 외부에서 사용 가능하게 (app.js에서 사용이 가능해야하니까)