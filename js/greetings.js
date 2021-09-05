const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// document가 아닌 loginForm에서 input을 찾을 수 있다.

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username)
  // "username"은 아이템의 이름(key)이고, 두번째는 변수 username이다.
  paintGreetings(username);
}


loginForm.addEventListener("submit", onLoginSubmit);
//submit은 엔터를 누르거나 버튼을 클릭할 때 발생함

function paintGreetings(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// greeting.innerText와 classList.remove를 반복하기 때문에
// 편의성을 위해 함수로 만들어 준다.

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // null이라면 form의 hidden class명이 지워진다.
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}