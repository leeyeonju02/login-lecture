"use strict";

//앱세팅
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs"); //뷰엔진을 어떤 방식으로 해석할지

//js에 접근할 수 있도록 미들웨어를 등록한다.
app.use(express.static(`${__dirname}/src/public`)); //express의 메소드 중 정적 경로를 추가할 수 있는 메소드 -static
//dirname은 현재app.js가 있는 위치를 반환한다. -> 그 위치(디렉토리네임) 안에, src 폴더 안에 public 폴더를 정적 경로로 추가(use)

app.use("/", home); //use 미들웨어를 등록하는 메소드

module.exports = app;
