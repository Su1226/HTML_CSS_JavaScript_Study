/**
 * 자바스크립트 합수
 * 
 * 벨로퍼트 자바스크립트 
 * https://learnjs.vlpt.us/ 
 */

// 일반 함수 정의 
 function 함수명(매개변수1, 매개변수2) {
    let 리턴데이터 = null;

    console.log(매개변수1);
    console.log(매개변수2);
    console.log("함수 호출");

    return 리턴데이터;  // 리턴이 필요할 때 시하면 됨. 
 }

 const 리턴값 = 함수명();
 console.log(리턴값);
 const 함수명2 = 함수명; // 매개 변수에 값을 넣어주지 않으면, 그냥 undefined가 됨. 
 const 리턴값2 = 함수명2(10,20); // 오버로딩이 필요 없음.
 console.log(리턴값2);
 const 리턴값3= 함수명2(30); // 오버로딩이 필요 없음.
 console.log(리턴값3);


 // 위 함수는 아래와 같이 될 수 있다. 
 // 익명함수
const 익명함수 = function (매개변수1, 매개변수2) {
    let 리턴데이터 = null;

    console.log(매개변수1);
    console.log(매개변수2);
    console.log("함수 호출");

    return 리턴데이터;  
}

// 위의 function을 지우고, `=>`를 붙이면 
// 화살표 함수
/**
 * 1. 매개면수가 하나면 () 괄호 생략 가능
 * 2. 실행문이 한 줄이리면 {} 괄호 생략 가능
 * 3. {} 생략 시, 값만 입력하면 return 값이 된다. 
 *   즉, 생략을 안하고 return 하려면 return 값을 명시해야 한다.
 */
const 화살표함수 = (매개변수1, 매개변수2) => {
    let 리턴데이터 = null;

    console.log(매개변수1);
    console.log(매개변수2);
    console.log("함수 호출");

    return 리턴데이터; 
}

const fx1 = () => console.log("fx1 호출");
const fx2 = n => console.log(n, "출력");
const fx3 = n => n + 1;
const fx4 = n => {
    console.log(n);
    return n + 1;
}
const fx5 = (a, b) => a * b;

fx1();
fx3(10);
console.log("n의 1을 더한 값은 " + fx3(10) + "입니다.");

console.log();

function a() {

}

console.log(console.log()); // console.log(a());와 동일하다. 결과값 : undefined

const consoleResult = console.log();
console.log(consoleResult); // undefined

function aa() {
    console.log("aa함수 호출");
    return "aa 함수 리턴값"
}

const aafx = () => {
    console.log("aa화살표 함수 호출");
    return "aa화살표 함수 리턴값"
}

function bb(fxx) {
    console.log("bb함수 호출");
    return fxx;
}

const bbfx = fxx => {
    console.log("bb화살표 함수 호출");
    return fxx;
}

function aaa(fxx, fxx2) {
    console.log("aaa함수 호출");
    console.log(fxx());
    console.log(fxx2());
    return "aaa함수 리턴값";
}

const aaafx = (fxx, fxx2) => {
    console.log("aaa 화살표 함수 호출");
    console.log(fxx());
    console.log(fxx2());
    return "aaa 화살표 함수 리턴값";
}

console.log(aaa(bb(aa), bb(aa)));
console.log();
console.log(aaafx(bbfx(aafx), bbfx(aafx)));

