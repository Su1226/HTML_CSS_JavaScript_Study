const student = {
    name: "이수원",
    age: 25,
    address: '부산 사상구',
    phone: '010-0000-7632',
};

// 비구조 할당
const { name, address } = student;
console.log(name, address);

// REST 문법
// 나머지 값들을 객체의 형태로 가져온다.
// rest는 앞에  `...`을 붙이고 변수명을 붙이면 된다. 
const { age, phone, ...a } = student;
console.log(age, phone, a);              
// 출력 결과 : 25 010-0000-7632 { name: '이수원', address: '부산 사상구' }

const numbers = [1, 2, 3, 4];
const [n1, n2, ...ns] = numbers;
console.log(n1, n2, ns);


// spread
const newStudent = {
    ...student,     // 위 student의 속성들을 그대로 copy.
    gender: '여',   //기존의 것에다가 속성을 추가할 수 있다.
} 
console.log(newStudent);

// 배열 spread
const newNumbers = [...numbers, 5, 6];    // 배열을 그대로 copy -> 이후 값 추가 가능
console.log(newNumbers);

// spread는 깊은 복사( 실제 값'을 새로운 메모리 공간에 복사하는 것을 의미)
// feat: 얕은 복사는 '주소 값'을 복사하는 것을 의미
// const newNumbers = numbers; 는 얕은 복사이다. 

let names = [];

function addName1(name) {
    names.push(name);
}

addName1("이수원");
addName1("김다혜");
addName1("정유지");
console.log(names);

function addName2(name) { // addName1과 같은 내용.
    names = [...names, name];
}

// 앞으로 값을 추가할 때는 spread로 할 예정.

// 객체의 spread
let obj = {
    data1: "data1",
    data2: "data2",
}

function addProps(props) {
    obj = {
        ...obj,
        ...props,
    }
}

addProps({data3: "data3", data4: "data4"});
console.log(obj);