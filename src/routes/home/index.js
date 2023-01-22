"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl"); //컨트롤러 가져오기

router.get("/", ctrl.hello); //루트 경로
router.get("/login", ctrl.login);

module.exports = router;
