"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirm-psword"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
    confirmPsword: confirmPsword.value,
  };
  console.log(req);

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", //내가 보내는 데이터의 타입을 명시한다.
    },
    body: JSON.stringify(req), //버튼이 눌리면 데이터를 body에 담아서 전달할거기 때문에 post로 요청한다.
  })
    .then((res) => res.json()) //서버로부터 응답이 오면 json 메소드를 호출해서 서버의 응답이 다 받아지는 순간 promise 객체를 반환하게 될 것이다.
    .then((res) => {
      //promise 객체를 반환했으니까 두번쨰 then으로 접근을 할 수 있다.
      if (res.success) {
        //res에 접근해서 success를 받아서 true면 로그인 페이지, 실패면 alert
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("회원가입 중 에러 발생"));
    });
}
