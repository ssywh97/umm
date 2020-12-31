'use stricts';

//1. Declaration
const arr1 = new Array();
const arr2 = [1.2];
console.log(arr2);

//Q1. make a strting out of an array
{
    const fruits = ['apple', 'banana','orange'];
    const result = fruits.join(', ');
    console.log(result);
}

//Q2. make an array out of a string
{
    const fruits = 'apple, banana, kiwi, orange';
    const result = fruits.split(',');
    console.log(result);
}

//Q3. make this array look like this: [5,4,3,2,1]
{
    const array = [1,2,3,4,5];
    const result = array.reverse();
    console.log(result);
    console.log(array); //아예 변함
}

//Q4. make new array without the first two elements
{
    const array = [1,2,3,4,5];
    // const result = array.splice(0, 2); //인덱스 0부터 2개를 삭제 : 배열 자체를 수정
    // console.log(result); // [1,2]
    // console.log(array); // [3,4,5]
    const result = array.slice(2, 5); // : 배열에서 원하는 부분만 리턴
    console.log(result); // // [3,4,5]
    console.log(array); // [1,2,3,4,5]
}