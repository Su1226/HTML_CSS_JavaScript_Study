/**
 * 비구조 할당(구조 분햐)
 */

const student = {
    name: "이수원",
    age: 25,
};

const studentNAME = student.name;
const studentAGE = student.age;
const{name, age} = student;
const {name: student2, age: studentAge2} = student;

console.log(student)
console.log(studentNAME);
console.log(studentAGE);
console.log(name);
console.log(age);

function printStudentInfo ({name, address, age}) {
    console.log(name);
    console.log(address);
    console.log(age);

};

printStudentInfo(student);


/**
 * 객체 구조 분해할 때 주의할 점
 * 객체의 속성명이 같으면 변수의 이름을 바꿔줘야 한다.
 */

const s1 = {
    name: "이수원",
    age:25,
}

const s2 = {
    name: "이수이",
    age: 22,
}

const {name: n1, age: a1} = s1;
const {name: n2, age: a2} = s2;


// 배열 비구조할당
const numbers = [1, 2, 3, 4, 5];
const [num1, num2, num3] = numbers;
console.log(num1);
console.log(num2);
console.log(num3);

const useState = (data) => {
    const dataState = {
        data: data,
        setData: (d) => {
            console.log(d, "데이터 set");
        }
    }
    return [dataState.data, dataState.setData];
};

const [ userData, setUserData ] = useState({username: "test", password: "1234"});
console.log(userData);
setUserData({username: "test2", password: "5678"});
console.log(userData);