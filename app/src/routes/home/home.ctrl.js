"use strict"; //라우터가 클라이언트의 요청을 연결해주면 실체 요청에 해당하는 컨트롤러 부분

const User = require("../../models/User");
//const UserStorage = require("../../models/UserStorage"); //모듈 가져오기: 상위..상위..모델ㄴ..에서 접근

const output = {
  //단순히 렌더링 해주는 함수들 output 객체에 모아 빼주기
  hello: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body); //user라는 인스턴스 만들기 req.body는 User 클래스에 body로 들어가게 된다.
    const response = await user.login();
    return res.json(response);
  },
  register: (req, res) => {
    const user = new User(req.body);
    const response = user.register();
    return res.json(response);
  },
};

//내보내기
module.exports = {
  output,
  process,
};
