"use strict";
//클래스 왠만하면 파일 이름과 동일
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
  }

  static getUsersInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); //users의 키 값들만 리스트 [id, psword, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {}); //초기값 : {} newUser

    return userInfo; // leeyj, 1234, df
  }
}

module.exports = UserStorage;
