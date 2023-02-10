"use strict"; //라우터가 클라이언트의 요청을 연결해주면 실체 요청에 해당하는 컨트롤러 부분

const UserStorage = require("../../models/UserStorage"); //모듈 가져오기: 상위..상위..모델ㄴ..에서 접근

const output = {
  //단순히 렌더링 해주는 함수들 output 객체에 모아 빼주기
  hello: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;
    //const UserStorage = new UserStorage(); //모듈로 가져온 클래스의 인스턴스 만들기 -> 데이터를 저장하고 있는 클래스는 굳이 인스턴스화 없이 다이렉트로 클래스자체에서 변수에 접근가능하게 하자

    const users = UserStorage.getUsers("id", "psword");
    //정적변수로 지정했기 때문에 클래스 자체에서 접근할 수 있다  -> 원래 console.log(UserStorage.users())
    //받아오고 싶은 데이터를 getUsers 호출하는 부분에서 정해서 만들어준다.

    const response = {}; //json 뒤의 파라미터로 넘어오는 것들을 object로 정리 - 응답하는 객체로 만들기
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        response.success = true; //response 응답을 객체로 만들어 success 키 값을 true로 주어준다.
        return res.json(response); //success 키 값이 true인 response 객체를 던져준다.
      }
    }

    response.success = false;
    response.msg = "로그인에 실패하셨습니다.";
    return res.json(response); // response 객체에 아이디 불일치 시 키값을 넣어 데이터를 던져준다.
  },
};
//해당 데이터와 프론트에서 전달한 데이터를 인증하는 과정을 만들어보자

//내보내기
module.exports = {
  output,
  process,
};
