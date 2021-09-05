const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("Input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // array를 스트링 타입으로 바꿔주기
}

// X 버튼을 눌렀을 때 해당항목 삭제하기
function deleteToDo(event) {
  const li = event.target.parentElement;    // 타켓의 부모인 li를 변수로 지정하고
  li.remove();                              // li 변수를 remove (x버튼을 눌렀을 때 부모 자체가 사라짐)
}

function paintTodo(newTodo) {
  const li = document.createElement("li");     // html에 li 만들기
  const span = document.createElement("span"); // 리스트 del버튼을 만들기 위해 span요소 만들기
  span.innerText = newTodo;                    //newTodo = toDoInput.value값을 가진 변수
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);                        // li안에 span을 자식요소로 넣어주기
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);  // newTodo를 array에 push한다(배열에 저장하는 방법)
  paintTodo(newTodo);   // 화면에 그 Todo를 그려준다
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
  console.log("this is turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos);
}

