"use strict";
//클래스 왠만하면 파일 이름과 동일
const fs = require("fs").promises;
//파일 시스템을 읽을 수 있게 require하고 fs의 readFile()메소드를 이용할 것임
//readfile은 promise를 자체적으로 제공하기 때문에 이를 불러오기 위해 require할 때 promise로 가져온다.

class UserStorage {
  static #getUserInfo(data, id) {
    //private한 변수나 메소드는 항상 최상단에 올려준다(일종의 컨벤선)
    const users = JSON.parse(data); //스코프때문에 로직을 이 안에 넣어준다.
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); //users의 키 값들만 리스트 [id, psword, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    //console.log(userInfo); // {id:woorimit, pword:1234 , name:우리밋 }
    return userInfo;
  }

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data); //파라미터로 넘어온 데이터가 버퍼에 있는 데이터이기 때문에 이것을 파싱해 우리가 읽은 수 있는 데이터로 변환한다.
    if (isAll) return users; // 메소드를 호출할때 true가 파라미터로 넘어오면 모든 값을 넘겨준다.
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {}); //{} : newUsers 객체
    return newUsers;
  }

  //데이터를 불러오는 메소드
  static getUsers(isAll, ...fields) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        //여기서 데이터라는 변수 안에 있는 데이터는 버퍼 데이터이다.
        return this.#getUsers(data, isAll, fields);
      })
      .catch(console.err);
  }

  static getUsersInfo(id) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.err);
  }

  static async save(userInfo) {
    const users = await this.getUsers(true); //모든 키 값을 파라미터로 넘겨 모든 데이터를 object 형태로 반환해서 가지고 있을 수 있게 된다.
    //getUsers를 출력하게 되면 promise가 나온다-> 비동기 처리를 해줘야 함 -> async, await
    //데이터 추가
    if (users.id.includes(userInfo.id)) {
      //클라이언트의 아이디가 데이터 베이스 users의 테이블에  존재하면 에러를 반환한다.
      throw "이미 존재하는 아이디입니다.";
    }
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);

    fs.writeFile("./src/databases/users.json", JSON.stringify(users)); //object를 json 형태로 바꾸어 저장해준다.
    //TypeError : data인자가 문자열 타입이나 버퍼의 인스턴스 타입이 되야한다 (json.stringify를 줘서 문자열로 바꿔준다. )
    //저장이 완료되면 아무것도 반환하지 않는다 오류 났을 때만 에러를 던진다. 그래서 return값을 만들어서 빼준다.
    return { success: true };
  }
}

module.exports = UserStorage;
