"use strict";
const UserStorage = require("./UserStorage");

class User {
  //클라이언트가 전달한 body값을 가지고 다니는 인스턴스를 만들어 생성자에서 body값을 지니게 한다.
  constructor(body) {
    this.body = body;
  }
  async login() {
    //비동기 함수로 바꿔줘야 await 옵션을 쓸 수 있다.
    const client = this.body;
    const { id, psword } = await UserStorage.getUsersInfo(client.id); //호출하는 객체가 promise객체여서 불러오는데 시간이 걸림
    //promise객체보다 불러오는 코드가 먼저 실행되는 것을 방지하기 위해 await을 걸어 시간을 끌어준다. await은 promise를 반환하는 애한테만 쓸 수 있다
    //UserStorage에 접근해서 해당하는 id와 psword 데이터 가져오기

    if (id) {
      if (id === client.id && psword === client.psword) {
        return { success: true }; //object 형태로 아이디가 같으면 true
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "존재하지 않은 아이디입니다." };
  }

  register() {
    const client = this.body;
    //UserStorage에 save메소드가 호출되서 데이터가 저장되게
    const response = UserStorage.save(client); //저장된 데이터를 Storage에 던져주기 위해
    //클래스가 constructor에서 전달받은 바디를 그대로 던져준다.
    return response;
  }
}

module.exports = User;
