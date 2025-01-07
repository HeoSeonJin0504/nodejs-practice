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

  fetch("/login", {
    // Restful API 강의 필독
    method: "POST", // POST 방식으로 서버에 요청
    headers: {
      "Content-Type": "application/json", // JSON 형태로 데이터를 보낸다
    },
    body: JSON.stringify(req), // req 객체를 JSON 형태로 변환
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.sucess) {
        location.href = "/"; // 로그인 성공 시 홈 화면으로 이동
      } else {
        alert(res.msg); // 로그인 실패 시 메시지 출력
      }
    })
    .catch((err) => {
      console.error("로그인 중 서버 에러 발생");
    });
}
