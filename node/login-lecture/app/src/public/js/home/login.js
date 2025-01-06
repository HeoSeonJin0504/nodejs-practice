"use strict";
// login.ejs와 연결되는 js 파일 (프론트에서 동작하는 js)
// Dom이란? Document Object Model의 약자로, 문서 객체 모델을 의미, HTML 데이터들을 가져와서 JS로 제어한다

const id = document.querySelector("#id"), // querySelector - 질의선택자, 태그의 id가 id인 것을 가져온다
  password = document.querySelector("#password"),
  loginBtn = document.querySelector("button"); // button 태그를 가져온다

loginBtn.addEventListener("click", login); // loginBtn을 클릭하면 login 함수를 실행

function login() {
  const req = {
    id: id.value, // id의 value값을 가져와서 req 객체에 저장
    password: password.value,
  };
}
