"use strict";
// 컴퓨터 네트워크에서 노드라는 여러 시스템을 연결하는 경로(링크)가 존재하고 라우팅은 최상의 경로를 선택하느 프로세스
//라우터는 단순히 도메인으로 들어왔을 때 클라이언트 요청을 연결하고 실체 요청은 컨트롤러이다.
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl"); //컨트롤러 가져오기

router.get("/", ctrl.output.hello); //루트 경로연결
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login); //실제 서버에서 해당 api만들기 - //해당 api는 프론트가 전달한 로그인 데이터를 받아서 로그인 기능을 처리해주는 애

module.exports = router; //외부 파일이 라우터를 쓸 수 있게 던진다.
