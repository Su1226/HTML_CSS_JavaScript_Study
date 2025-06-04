/**
 * Javascript class
 */

class student {
    name;
    age;

    // 생성자
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const newStudent1 = new student("이수원", 25);
console.log(newStudent1);
console.log(newStudent1.name);