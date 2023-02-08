"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-parser"); //npm i body-parser -s 설치하고 미들웨어 등록까지 해야한다.
const app = express();

//라우팅
const home = require("./src/routes/home"); // 라우팅 코드를 require해 부른다

//앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs"); //뷰엔진을 어떤 방식으로 해석할지

//js에 접근할 수 있도록 미들웨어를 등록한다.
app.use(express.static(`${__dirname}/src/public`)); //express의 메소드 중 정적 경로를 추가할 수 있는 메소드 -static
//dirname은 현재app.js가 있는 위치를 반환한다. -> 그 위치(디렉토리네임) 안에, src 폴더 안에 public 폴더를 정적 경로로 추가(use)

app.use(bodyParser.json()); //use로 미들웨어 등록, 바디파서가 json데이터를 파싱해올 수 있도록 명시
app.use(bodyParser.urlencoded({ extended: true })); //바디파서에 url 인코딩 설정 : url을 통해 전달되는 데이터에 한글,공백 등과같은 문자가 포함될 경우 제대로 인식되지 않는 문제를 해겨해준다.

app.use("/", home); //use 미들웨어를 등록하는 메소드: 내보낸 라우터를 받아온다.
//루트 라는 경로로 들어오면 home으로 보내준다는 의미

module.exports = app;
