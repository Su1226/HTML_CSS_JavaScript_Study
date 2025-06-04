setTimeout(() => console.log(1), 3000);
setTimeout(() => console.log(2), 2000);
setTimeout(() => console.log(3), 1000);

// setTimeout() 자체는 동기이지만,
// Promise를 사용하여 동기 안에서 비동기를 추가할 수 있다.

new Promise((resolve) => {
    console.log("Promise1 실행");
    resolve();
})
.then(() => console.log("Promise1의 then 실행1"))
.then(() => console.log("Promise1의 then 실행2"));

new Promise((resolve) => {
    console.log("Promise2 실행");
    resolve();
}).then(() => console.log("Promise2의 then 실행"));

/**
 * 결과 
    Promise1 실행
    Promise2 실행
    Promise1의 then 실행1
    Promise2의 then 실행
    Promise1의 then 실행2
    3
    2
    1

    then()에는 우선순위가 있음을 확인 할 수 있다. 
    또한 then()의 return type은 Promise이다.
 */


/**
 * Promise(비동기 객체)
 */


function thenFx1(result) {
    console.log(3);
    console.log("thenFx1(result) : ", result);
    return 200;
}

function thenFx2(result) {
    console.log(4);
    console.log("thenFx2(result) : ", result);
}

function promiseFx(resolve, reject) {
    console.log("2");
    resolve(100);                       // resolve가 reject의 오류를 막는다. 
    reject(new Error("오류 발생!!"));   // 만약 reject가 실행이 되면, 오류가 발생하며 catch가 실행된다. 
}

console.log("1");
const p1 = new Promise(promiseFx);
console.log("-1-");
const p2 = p1.then(thenFx1);
console.log("-2-");
const p3 = p2.then(thenFx2);
console.log("-3-");
const e1 = p3.catch(error => console.error(error));
const p4 = new Promise(promiseFx);
console.log("-4-");
const p5 = p4.then(thenFx1);
console.log("-5-");
const p6 = p5.then(thenFx2);
console.log("-6-");
const e2 = p6.catch(error => console.error(error));

/**
 * 결과
    1
    2
    -1-
    -2-
    -3-
    2
    -4-
    -5-
    -6-
    3
    thenFx1(result) :  100
    3
    thenFx1(result) :  100
    4
    thenFx2(result) :  200
    4
    thenFx2(result) :  200
 
    resole()가 있기 때문에 error를 넣어주더라도 오류가 막아진다. 
    만약 resolve()를 주석처리하고 돌리면 다음과 같은 결과가 나온다. 

    1
    2
    -1-
    -2-
    -3-
    2
    -4-
    -5-
    -6-
    Error: 오류 발생!!
        at promiseFx (c:\gov_edu\html_css_javascript\javascript\09.js:55:12)
        at new Promise (<anonymous>)
        at Object.<anonymous> (c:\gov_edu\html_css_javascript\javascript\09.js:59:12)
        at Module._compile (node:internal/modules/cjs/loader:1730:14)
        at Object..js (node:internal/modules/cjs/loader:1895:10)
        at Module.load (node:internal/modules/cjs/loader:1465:32)
        at Function._load (node:internal/modules/cjs/loader:1282:12)
        at TracingChannel.traceSync (node:diagnostics_channel:322:14)
        at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    Error: 오류 발생!!
        at promiseFx (c:\gov_edu\html_css_javascript\javascript\09.js:55:12)
        at new Promise (<anonymous>)
        at Object.<anonymous> (c:\gov_edu\html_css_javascript\javascript\09.js:66:12)
        at Module._compile (node:internal/modules/cjs/loader:1730:14)
        at Object..js (node:internal/modules/cjs/loader:1895:10)
        at Module.load (node:internal/modules/cjs/loader:1465:32)
        at Function._load (node:internal/modules/cjs/loader:1282:12)
        at TracingChannel.traceSync (node:diagnostics_channel:322:14)
        at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
*/