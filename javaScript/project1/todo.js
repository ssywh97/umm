const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = []; //toDos의 값은 변할 수 있기때문에 let으로 지정

function deleteToDo(event){ //투두를 삭제하는 함수
    const btn = event.target; //이벤트가 발생하는 타겟
    const li = btn.parentNode; //이벤트가 발생하는 타겟의 부모노드(li)
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        //todo의 아이디값과 cleantodo의 아이디값이 다르면 filter를 해줌?
        return toDo.id !== parseInt(li.id); 
    });
    toDos = cleanToDos; //toDos의 값을 cleantoDos의 값으로 바꿈
    saveToDos(); //toDos의 변경값을 새로 저장
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