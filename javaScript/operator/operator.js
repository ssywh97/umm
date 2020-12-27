'use stricts';
//1. String concatenation
 console.log('my' + ' cat');
 console.log('1' + 2);
 console.log(`string literals: 1 + 2 = ${1 + 2}`);

 //2. Numeric operatiors
 console.log(1 + 1); //add
 console.log(1 - 1); //substract
 console.log(1 / 3); //divide
 console.log(1 * 5); //multiply
 console.log(5 % 2); //remainder
 console.log(2 ** 10); //exponentiation

 //3. Increment and decrement operators
 let counter = 2;
 const preIncrement = ++counter;
 console.log(preIncrement);
 const postIncrement = counter++;
 console.log(postIncrement);
 console.log(counter);

 //4. Assignment operators
 let x = 3;
 let y = 6;
 x += y;  // x = x + y;
 x -= y;
 x *= y;
 x /= y;

 //6. Logical operators: || (or), && (and), ! (not)
 const value1 = false;
 const value2 = 4 < 2;

 // || (or)
 console.log(`or: ${value1 || value2 || check()}`);

 function check(){
     for (let i = 0; i < 10; i++){
         console.log('ㅠㅠ');
     }
     return true;
 }
// && (and)
 console.log(`and: ${value1 && value2 && check()}`);

 //equality - puzzler
 console.log(0 == false); //true
 console.log(0 === false); //false
 console.log('' == false); //true
 console.log('' === false); //false
 console.log(null == undefined); //true
 console.log(null === undefined); //false

 //8. Conditional operators: if
 //if, else if, else
 const name = 'seo';
 if (name === 'seo'){
     console.log('Welcome, seo!');
 }else if(name === 'coder'){
     console.log('You are amazing coder');
 }else {
     console.log('unknown');
 }

 //9. Ternary operator: ?
 //condition ? value1 : value2
 console.log(name === 'seo' ? 'yes' : 'no'); //조건이 만족하면 왼쪽, 아니면 오른쪽

 //10. Switch statement
 const browser = 'IE';
 switch (browser) {
     case 'IE':
         console.log('go away!');
         break;
    case 'Chrome':
    case 'Firefox':
        console.log('I love you!');
        break;
    default:
        console.log('same all!');
        break;
 }

 //11. Loops
 let i = 3;
 while(i>0){
     console.log(`while: ${i}`);
     i--;
 }

 //nested loops 이중반복문
 for (let i = 0; i < 10; i++){
     for (let j = 0; j < 10; j++){
         console.log(`i: ${i}, j: ${j}`);
     }
 }