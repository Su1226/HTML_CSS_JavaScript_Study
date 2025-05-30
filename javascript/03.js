const student = {
    name: "이수원",
    age: 25,
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student['name']);
console.log(student['age']);

const a = 'name';
const b = 'age';
// console.log(student.a);는 불가능.
// 아래와 같은 방식의 참조는 가능. 
console.log(student[a]);
console.log(student[b]);

student[a] = '이수투';
console.log(student);
student.name = '이수쓰리';
console.log(student);

student.printName = () => console.log(student.name);
student.printName();

const loginButton = {
    text: "로그인",
    value: "test",
    onclick: () => {
        console.log(loginButton.text);
    },
}

loginButton.onclick();
loginButton.onclick = () => {
    console.log("로그인 버튼을 클릭하였습니다.");
}
loginButton.onclick();

console.log();

console.log(typeof(loginButton));

const loginButtonKesy = Object.keys(loginButton);
for (let i = 0; i < loginButtonKesy.length; i++) {
    console.log(loginButton[loginButtonKesy[i]]);
}

const loginButtonVaulues = Object.values(loginButton);
for (let i = 0; i < loginButtonVaulues.length; i++) {
    console.log(loginButtonVaulues[i]);
}

// 키-값의 쌍을 배열로 묶어주는 메소드 : .entries()
const loginButtonEntries = Object.entries(loginButton);
console.log(loginButtonEntries);
for (let i = 0; i < loginButtonEntries.length; i++) {
    const entry = loginButtonEntries[i];
    const key = entry[0];
    const value = entry[1];
    console.log(entry, key, value);
}

// 향상된 for문 -> let 변수명 of 객체명 
for (let entry of loginButtonEntries) {
    const entry = loginButtonEntries[i];
    const key = entry[0];
    const value = entry[1];
    console.log(entry, key, value);
}