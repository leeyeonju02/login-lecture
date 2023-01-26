"use strict";
//html과 연동된 js 파일
// login.ejs - login.js 연결
//login.js는 html 문서와 연결된 자바스크립트 파일로서 프론트 단에서 동작하는 자바스크립트

//queryselector: 질의 선택자
const id = document.querySelector("#id"), //파라미터에서 선택자에서 html의 값을 가져올 수 있다.
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

// console.log(id); //null값이 나오게 된다. ejs에서 document에서 querySelecotor값을 가져오기 전에 console값을 먼저 실행되기 때문
//defer 추가 해줘서 위 문제 해결
loginBtn.addEventListener("click", login);

function login() {
  //요청데이터니까 req변수에 담음
  const req = {
    //object로 선언
    id: id.value,
    psword: psword.value,
  };
  console.log(req);
}
//텍스트 안에 있는 값 접근 : 테그에 value라는 값 접근
