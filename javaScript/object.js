'use stricts';

//1. Literals and properties

// object = {key: value}; 키와 벨류의 집합체
// const obj1 = {};
//const obj2 = new Object();

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const seo = {name: 'seo', age: 24};
print(seo);

seo.hasjob = true;
console.log(seo.hasjob);

//2. Conputed properties

//ket should be always string!!
console.log(seo.name);
console.log(seo['name']);

function printValue(obj, key){
   // console.log(obj.key);  --> undefined
   console.log(obj[key]);
}
printValue(seo, 'name');

//4. Property value shorthand

const person1 = {name: 'bob', age: 22};
const person2 = {name: 'steve', age: 23};
const person3 = {name: 'dave', age: 27};
const person4 = new Person('kim', 20);

console.log(person4);
//4. Constructor function
function Person(name, age){
    this.name = name;
    this.age = age;
}

//5. in operator: property existence check : 해당하는 오브젝트 안에 키가 있는지 없는지 확인
console.log('name' in seo); // true
console.log('age' in seo); // true
console.log('height' in seo); // false

// 6. for..in vs for..of
console.clear();

for (key in seo){
    console.log(key);
}

//for (value of iterable)
const array = [1,2,3,4,5];
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }
// -- > 
for (value of array){ //array배열의 값을 순차적으로 출력
    console.log(value);
}

//7. cloning
// Object.assign 이용
const user = {name: 'park', age: 11};
const user2 = user;
user2.name = 'code';
console.log(user);

const user4 = {};
Object.assign(user4, user); //user의 내용을 user4로 복사
console.log(user4);

const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const fruit3 = {color: 'purple'};
const mixed = Object.assign({}, fruit1, fruit2, fruit3);
console.log(mixed.color);
console.log(mixed.size);