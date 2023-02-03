"use strict";
//라우터가 클라이언트의 요청을 연결해주면 실체 요청에 해당하는 컨트롤러 부분

//변수 만들어 그 안에 컨트롤러 함수넣어 연결하기
const hello = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};
//내보내기
module.exports = {
  hello,
  login,
};
