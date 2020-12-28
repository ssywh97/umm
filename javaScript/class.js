'use stricts';

//1. Class declarations
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speack(){
        console.log((`${this.name}: hello!`));
    }
}

const seo = new Person('seo', 24);
console.log(seo.name);
console.log(seo.age);
seo.speack();

//2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){ //getter
        return this._age;
    }

    set age(value){ //setter
        // if(value < 0){
        //     throw Error('age can not be negative!');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'job', -1); //실수로 나이를 -1로 지정했음ㅠ

// 3. Fields (public, private)

class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log

//5. Inheritance
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{};
class Triangle extends Shape{
    draw(){
        super.draw();
        console.log('ㅅ');
    }
    getArea(){ //overriding(재정의)
        return (this.width * this.height) / 2;
    }
};

const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'red');

rectangle.draw();
triangle.draw();
console.log(rectangle.getArea());
console.log(triangle.getArea());