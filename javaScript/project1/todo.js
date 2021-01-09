const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event){ //투두를 삭제하는 함수
    const btn = event.target; //이벤트가 발생하는 타겟
    const li = btn.parentNode; //이벤트가 발생하는 타겟의 부모노드(li)
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //JSON.stringify는 object를 string로 바꿔주는 역할
}

function paintToDo(text){
    const li = document.createElement("li"); //li태그를 생성
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1; 

    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    
    li.appendChild(delBtn); //뭔가를 그의 father elemen안에 넣는것
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li); //toDoList ul에 li를 삽입
    
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; //엔터를 누르면 공백으로 변함.
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
           paintToDo(toDo.text);
        })
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();