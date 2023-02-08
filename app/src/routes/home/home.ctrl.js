"use strict";
//라우터가 클라이언트의 요청을 연결해주면 실체 요청에 해당하는 컨트롤러 부분

//변수 만들어 그 안에 컨트롤러 함수넣어 연결하기
const output = {
  hello: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["leeyj", "나개발", "김팀장"],
  psword: ["1234", "2345", "3456"],
}; //id와 psword를 리스트로 만들어줘서 같은 번지의 패스워드를 만들어줬다.

//hello와 login 은 단순히 해당 페이지를 렌더링 해주는 함수인데 이 함수를 아웃풋으로 빼주기
const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다. ",
    });
  },
};
//해당 데이터와 프론트에서 전달한 데이터를 인증하는 과정을 만들어보자

//내보내기
module.exports = {
  output,
  process,
};
