let name = '이수원';

console.log(name);
console.log("Hello, js");

name = '이수투';
console.log(name);


// const는 상수로, 값을 변경할 수 없음.
const age = 25;
console.log(age);
// age = 33;
// console.log(age);

/** 연산자 */
let data1 = 10;
let data2 = '10';
let result = data1 == data2;
console.log(result);
let result2 = data1 === data2;
console.log(result2);
let result3 = data1 !== data2;
console.log(result3);
console.log(typeof(data1), typeof(data2));
console.log("1" + "2");
console.log(1 + 2);

console.log();

/** not 연산 활용법 */
console.log(!1);
console.log(!0);
console.log(!"a");
console.log(!"");
console.log(!null);
console.log(!!null);

console.log("".length > 0); // console.log(!!"");와 같은 의미 
console.log(!!"" == false);

/** 조건식 */
let data = {
    name: "이수원",
    age: 25
}

if(!data) {
    console.log("사용자 정보가 없습니다.")
} else if (data.name === "이수원") {
    console.log("사용자 이름이 일치합니다.")
} else if(data.age === 25) {
    console.log("사용자의 이름은 일치하지 않지만, 나이는 일치합니다.");
} else {
    console.log("사용자 정보에서 일치하는 것이 없습니다.");
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}