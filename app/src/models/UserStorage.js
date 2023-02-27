"use strict";
//클래스 왠만하면 파일 이름과 동일
const fs = require("fs").promises; //파일을 읽을 수 있게

class UserStorage {
  static #getUserInfo(data, id) {
    //private한 변수나 메소드는 항상 최상단에 올려준다(일종의 컨벤선 암묵적 문화 )
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id); //스코프때문에 로직을 이 안에 넣어준다.
    const usersKeys = Object.keys(users); //users의 키 값들만 리스트 [id, psword, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {}); //초기값 : {} newUser
    //console.log(userInfo); // {id:woorimit, pword:1234 , name:우리밋 }
    return userInfo; // leeyj, 1234, df
  }

  static getUsers(...fields) {
    //const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {}); //{} : newUsers 객체
    return newUsers;
  }

  static getUsersInfo(id) {
    return (
      fs
        .readFile("./src/databases/users.json") //readfile 자체가 promise를 반환한다.
        // promise를 반환하게 되면 then()메소드에 접근이가능, promise를 반환하게 되는 것에 대한 오류 처리는 catch()를 통해 가능
        .then((data) => {
          return this.#getUserInfo(data, id); //은닉화한 메소드 가져오기
        }) //이 해당 로직이 성공했을 때 실행
        .catch(console.err)
    );
  }
  //로직이 실패했을 때 실행 ((err) => console.log(err));

  //readfile에서 두번째 파라미터로 넘긴 것들 , err, data를 콜백으로 넘겼다. 근데 promise는 성공할때는 then, 실패할 떄는 catch가 실행되기때문에
  // err를 catch에서 받을 수 있다.

  static save(userInfo) {
    //const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return { success: true };
  }
}

module.exports = UserStorage;
