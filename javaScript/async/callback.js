'use strict';

// JavaScript is synchronous. = 자바스크립트는 동기적이다.
//호이스팅이 된 이후부터 코드가 작성한 순서에 맞춰서 하나하나씩 동기적으로 실행됨.
//hoisting : var, function declaration 선언이 제일 위로 올라가는것.
console.log('1');  //1출력
// setTimeout(function(){  //브라우저에게 1초뒤에 실행해달라고 요청(응답 대기x)
//     console.log('2');
// }, 1000);
// == 
setTimeout(() => console.log('2'), 1000); //대괄호 지우고, function 지우고  => 넣고
console.log('3'); //2를 요청보낸 후 3 실행

//synchronous callback
function printImmediately(print){ //함수선언은 호이스팅 되기때문에 제일 상단에 있는것과 마찬가지
    print();
}
printImmediately(() => console.log('hello'));

//Asynchronous callback
function printWithDelay(print, timeout){ //함수선언은 호이스팅 되기때문에 제일 상단에 있는것과 마찬가지
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

//Callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
            (id === 'seo' && password === 'dream') ||
            (id ==='coder' && password === 'academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    } //사용자를 로그인하는 api

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
        if(user === 'seo'){
            onSuccess({name: 'seo', role: 'admin'});
        }else{
            onError(new Error('no access'));
        }
        }, 1000);
    } //사용자의 데이터를 받아서 역할을 서버에게 요청해서 정보를 받아오는 api
}

const userStorage = new UserStorage();

const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            }, 
            error => {
                console.log(error);
            }
            );
        },
    error => {
        console.log(error);
    }
);