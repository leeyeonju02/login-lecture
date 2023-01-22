"use strict";

//앱세팅
const express = require("express");
const app = express();

//라우팅
const home = require("./routes/home");

//앱세팅
app.set("views", "./views");
app.set("view engine", "ejs"); //뷰엔진을 어떤 방식으로 해석할지

app.use("/", home); //use 미들웨어를 등록하는 메소드

module.exports = app;
