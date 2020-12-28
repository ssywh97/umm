'use stricts';

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234);

//2. Parameters
function changeName(obj){
    obj.name = 'coder';
}
const seo = {name: 'seo'};
changeName(seo);
console.log(seo);

//3. Default parameters
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//4. Rest parameters
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}
printAll('dream', 'coding', 'seo');

//5. Local scope(밖에ㅐ서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.)
let globalMessage = 'global'; // global variable
function printMessage(){
    let message = 'hello'; //local variable
    console.log(message);
    console.log(globalMessage);
}
printMessage();
// console.log(message); //에러 

//6. Return a value
function sum(a, b){
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1,2)}`);

//7. Early return, early exit
// bad
function upgradeUser(user){
    if(user.point>10){
        // 오래걸림
    }
}
//good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    //long upgrade logic
}

// Callback hell
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}

const printYes = function (){ //anonymous function
    console.log('yes!');
};

const printNo = function print(){ //named function
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function
//always anonymous
const simplePrint = function () {
    console.log('simplePrint');
};
//변환
//const simplePrint = () => console.log('simplePrint'); //function 제거, 블록 제거
const add = (a, b) => a+b;
console.log(add(2,3));

//IIFE: Immediately Inboked Function Expression : 함수 선언함과 동시에 호출
(function hello(){
    console.log('IIFE');
})();
