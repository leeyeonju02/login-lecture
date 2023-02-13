"use strict";
const UserStorage = require("./UserStorage");

class User {
  //생성자 만들어 바디 받기
  constructor(body) {
    this.body = body; //파라미터로 받아온 바디를 this.body에 넣기 = User의 body변수 안에 파라미터 body가 들어간다.
  }
  login() {
    const body = this.body;
    const { id, psword } = UserStorage.getUsersInfo(body.id); //아이디 값을 던지면 아이디에 해당하는 데이터를 object로 전달하는 메소드 만들자
    //console.log(a); 해당하는 키 값 object 중 id와 psword 키 값만 받는다. ㅋ
    //id와 psword 의 필드의 값을 가져온다 변수로 받을 수 도 있지만 object 안에 id와 psword 라는 변수로 바로 받음- 들어올 때도 object로 들어와서 저장도 object로 한다.
    //UserStorage에 내가 요청한 아이디에 해당하는 데이터만 가져오는 메소드 만들자

    if (id) {
      //일단 내가 전달한 아이디가 userStorage에 있으면 true
      //스토리지에서 가져온 아이디와 클라이언트가 입력한 바디의 아이디가 같고, 스토리지의 패스워드와 클라이언트의 패스워드가 같으면
      if (id === body.id && psword === body.psword) {
        return { success: true }; //object 형태로 아이디가 같으면 true
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "존재하지 않은 아이디입니다." };
  }
}

module.exports = User;
