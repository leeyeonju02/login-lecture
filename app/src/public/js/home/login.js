"use strict";

const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    psword: psword.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", //내가 보내는 데이터의 타입을 명시한다.
    },
    body: JSON.stringify(req), //stringify: 단순히 req를 문자열로 바꿔주는 메소드
  })
    .then((res) => res.json()) // console.log(res.json()))
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("로그인 중 에러 발생"));
    });
}
