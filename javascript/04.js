/**
 * 배열(Array)
 */

// 선언
const arr1 = [];
const arr2 = new Array();
// 두 개 다 같은 의미. -> java에서의 ArrayList와 같은 역할을 한다. 

arr1.push(10);
arr1.push(20);
arr1.push(30);
arr1.push(40);
console.log(arr1)

arr2.push(10);
arr2.push(20);
arr2.push(30);
arr2.push(40);
console.log(arr2);

console.log(arr1 == arr2);

const obj1 = {key1: "value1", key2: "value2"};
const obj2 = {key1: "value1", key2: "value2"};
console.log(obj1 == obj2);

// JSON (javascript에서 json을 다루는 바업)
// JS 객체 또는 배열을 JSON 문자열로 변환 : JSON.stringify();
// JS 문자열을 JS 객체 또는 배열로 변환 : JSON.parse();

const json1 = JSON.stringify(arr1);
const json2 = JSON.stringify(arr2);

console.log(json1);
console.log(json2);
console.log(json1 == json2);

const json3 = JSON.stringify(obj1);
const json4 = JSON.stringify(obj2);
console.log(json3);
console.log(json4);
console.log(json3 == json4);

// 배열의 기본 내장 함수

const names = ['이수원', '이수투', '이수쓰리'];
// 값 추가
names.push('이수포');
// 깂 제거
names.pop('이수쓰리');
console.log(names);
// 값 수정
names.splice(1, 0, "이수오");
console.log(names);

// 값 찾기
const findFx = n => n === "이수오";
const foundName = names.find(findFx);
console.log(foundName);

const students = [
    {name: '이수원', age: 25},
    {name: '이수투', age: 22},
    {name: '이수쓰리', age: 23},
    {name: '이수포', age: 24},
    {name: '이수파이브', age: 25},
]
console.log(students.find(s => s.name === "이수투"));

// 값 존재 유무
console.log(names.includes('이수오'));

// 필터링
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.filter(n => n % 2 === 0));
console.log(students);

console.log(students.filter(students => students.age === 25));

// 값 변환
console.log(numbers.map(n => n * 10));
console.log(students.map(student => {
    if(student.age === 25) {
        return {
            name : student.name,
        }
    }
    return student;
}));

// 변환된 값을 함수를 이용하여 새로운 배열에 넣기
function map(array, fx) {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(fx(array[i], i));
    }
    return newArray;
}

console.log(map(students, student => {
    if(student.age === 25) {
        return {
            name: student.name,
        }
    }
    return student;
}));


const filter = (array, fx) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (fx[array[i]]) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(filter(students, student => student.age === 22));