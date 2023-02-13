"use strict";
//클래스 왠만하면 파일 이름과 동일하게 해준다.
class UserStorage {
  static #users = {
    id: ["leeyj", "나개발", "김팀장"],
    psword: ["1234", "2345", "3456"],
    name: ["df", "dd", "dfd"],
  };
  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {}); //{} : newUsers 객체
    return newUsers;
  } //이런식으로 데이터를 은닉화하고 메소드로 전달해야 한다.

  static getUsersInfo(id) {
    const users = this.#users; //위 데이터를 가져옴
    const idx = users.id.indexOf(id); //유저의 아이디에서 파라미터로 넘겨준 아이디
    const usersKeys = Object.keys(users); //users의 키 값들만 리스트로 만든다. => [id, psword, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      //배열의 reduce를 돌려준다. 초기값:newUsers {},
      newUser[info] = users[info][idx]; //newUserf라는 오브젝트에 키 값이 순차적으로 들어간다. 처음엔 아이디 ..
      return newUser;
    }, {}); //초기값 : {} newUser

    return userInfo;
  }
}

module.exports = UserStorage;
