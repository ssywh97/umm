// JSON
// JavaScript Object Notation

// 1. Object to JSON
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {  //json에 포함 x
        console.log(`${name} can jump!!`);
    },
};

json = JSON.stringify(rabbit); //rabbit 오브젝트를 json으로 변환
console.log(json);

json = JSON.stringify(rabbit, ["name", "size"]); //원하는 프로폴티만 json으로 변환!
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
   console.log(`key: ${key}, value: ${value}`); //모든 키와 벨류들이 콜백함수에 전달
   return value;
}); 
console.log(json);

//2. JSON to Object
//parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
});
console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);