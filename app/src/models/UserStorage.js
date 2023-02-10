"use strict";
//클래스 왠만하면 파일 이름과 동일하게 해준다.
class UserStorage {
  static #users = {
    //#-public 한 변수에서 private한 변수로 선언: 외부에서 불러올 수 없다.
    //정적 변수를 만들어 클래스 자체에서 접근할 수 있게 한다.
    //클래스 안에 변수를 선언할 때는 const 같은 선언자가 필요 없다.
    id: ["leeyj", "나개발", "김팀장"],
    psword: ["1234", "2345", "3456"],
    name: ["df", "dd", "dfd"],
  };

  //컨트롤러에서 파라미터로 키값을 몇개를 던질지 알수 없다. ...변수명 (파라미터로 넘긴 데이터들이 배열 형태로 넘어오게 된다)
  static getUsers(...fields) {
    //['id', 'psword']
    //클래스가 staitc 이기 떄문에 메소드도 static이어야 접근이 가능하다.
    //은닉화된 private 변수를 리턴해 받아올 수 있게하는 함수 //클래스 자체에서 메소드에 접근하기 위해선 static 접근자 사용
    //return this.#users;
    const users = this.#users;
    //이 getUsers메소드를 호출하게 되면 컨트롤러에 파라미터에 넘겨온 키값만 꺼내 새로 유저 정보를 만들어줘야 한다.
    const newUsers = fields.reduce((newUsers, field) => {
      //파라미터 : newUsers(새로운 오브젝트가 생성될 거)
      //field는 fields의 배열의 값들이 계속해서 순회하게 된다.
      if (users.hasOwnProperty(field)) {
        //users라는 오브젝트에 field에 해당하는 키 값이 있는지 물어보는 것-> 키 값이 들어오면 true
        newUsers[field] = users[field];
      }
      return newUsers; //리턴되는 newUsers가 다음 파라미터인 newUsers에 들어가게 된다.
    }, {}); //{} - id라는 키(해당하는 키)가 처음에 들어오고 id라는 키가 있으면 해당하는 키와 값을{} 오브젝트에 넣어준다 이때 이 오브젝트{}는 newUser니까
    return newUsers;
  }
} //이런식으로 데이터를 은닉화하고 메소드로 전달해야 한다.

module.exports = UserStorage; // 클래스를 밖으로 사용할 수 있도록 꺼내준다.
