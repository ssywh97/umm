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
class Student{
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];
//Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

//Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled === true);
    console.log(result);

}

//Q7. make an array containing only the students scores
//result should be : [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
}

//Q8. check if there is a student with the score lower than 50
{
    // const result = students.filter((student) => student.score < 50); 이럴땐 그 값이 반환되고
    const result = students.filter((student) => student.score < 50);//이거는 있는지 없는지, 곧 true or false 반환
   //students.every는 모두 만족해야 true
    console.log(result);
}

//Q9. compute students' average score
{
    const result = students.reduce((prev, curr) => prev + curr.score,0); //학생의 score을 누적해서 더해감
     console.log(result/students.length);
}

//Q10. make a string containing all the scores
// result should be : '45,8,0,90,66,88'
{
    const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
    console.log(result);
}

//BONUS! do Q10 sorted in ascending order
//result should be: '45, 66, 80, 88, 90'
{
    const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
    console.log(result);
}