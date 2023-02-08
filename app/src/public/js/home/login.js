"use strict";
//html과 연동된 js 파일
// login.ejs - login.js 연결
//login.js는 html 문서와 연결된 자바스크립트 파일로서 프론트 단에서 동작하는 자바스크립트

//queryselector: 질의 선택자
const id = document.querySelector("#id"), //파라미터에서 선택자에서 html의 값을 가져올 수 있다.
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

// console.log(id); //null값이 나오게 된다. ejs에서 document에서 querySelecotor값을 가져오기 전에 console값을 먼저 실행되기 때문
//defer 추가 해줘 동기로 접근하면서 문제를 해결한다. < script defer  src = “script.js”></script>

//로그인 버튼이 클릭되면 login 함수 실행
loginBtn.addEventListener("click", login);

function login() {
  //요청데이터니까 req변수에 담음- object로 선언
  const req = {
    //object로 선언
    id: id.value, //테그에 value라는 변수에 접근해 버튼이 클릭됬을 때 값을 가져온다.
    psword: psword.value,
  };
  // 위에서 가져온 데이터를 fetch를 통해 서버에 전달한다(네트워크 통신)
  //fetch라는 것을 통해서 어떤 경로를 통해 데이터를 전달해줘야 한다.
  // /login이라는 경로가 있다고 가정하고 전달하자 두번째 파라미터로 전달할 데이터를 넣어준다 (object 형태)
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", //내가 보내는 데이터의 타입을 명시한다.
    },
    body: JSON.stringify(req), //stringify: 단순히 req를 문자열로 바꿔주는 메소드
  })
    //서버에서 응답한 데이터 받기- res 데이터가 파라미터로 전달 : promise라는 데이터가 날라오게 된다. 이를 받기 위해선 then을 한번더
    .then((res) => res.json()) // console.log(res.json()))
    .then((res) => {}); // console.log(res)
  //then((res) => res.json()).then(res) => console.log(res));
  //then((res) => res.json()).then(console.log));
}
