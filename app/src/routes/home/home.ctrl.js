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
  login: (req, res) => {
    //user라는 클래스를 인스턴스화 할때 클라이언트가 전달한 request 데이터를 넣어서 인스턴스화를 하게된다. ->user는 해당하는 바디에 데이터를 들고 다니게 된다.
    const user = new User(req.body); //user라는 인스턴스 만들기 req.body는 User 클래스에 body로 들어가게 된다.
    const response = user.login(); //메소드를 호출하면 resposne 응답을 받을 것이고
    return res.json(response); //login()함수 실행 후 받은 response를 컨트롤러가 클라이언트한테 json의 형태로 응답해줄 것이다.
  },
};

//내보내기
module.exports = {
  output,
  process,
};
