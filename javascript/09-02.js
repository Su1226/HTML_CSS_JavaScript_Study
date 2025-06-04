function requestBackend(isOk) {
    if(isOk) {
        return {status: 200, body: "정상적인 데이터 응답!"};
    }
    return {status: 400, body: "오류 데이터 응답!"};
}

const p1 = new Promise((resolve, reject) => {
    console.log("p1 Promise 생성");
    const { status, body } = requestBackend(true);
    if (status === 200) {
        resolve(body);
    } else if(status === 400) {
        reject(new Error(body));
    }
})

p1.then(responseBody => {
    console.log("p1 : ", responseBody);
    return "p1 리턴값!"
}).then(result => {
    console.log("p1-2 : ", result);
    return "p1-2의 리턴값!"
}).then(result => {
    console.log("p1-3 : ", result);
}).catch(error => {
    console.log("p1 : ", error);
})

const p2 = new Promise((resolve, reject) => {
    console.log("p2 Promise 생성");
    const {status, body } = requestBackend(false);
    if (status === 200) {
        resolve(body);
    } else if(status === 400) {
        reject(new Error(body));
    }
})

p2.then(responseBody => {
    console.log("p2 : ", responseBody);
}).catch(error => {
    console.log("p2 : ", error);
})

const p3 = new Promise((resolve, reject) => {
    console.log("p3 Promise 생성");
    const {status, body } = requestBackend(true);
    if (status === 200) {
        resolve(body);
    } else if(status === 400) {
        reject(new Error(body));
    }
})

p3.then(responseBody => {
    console.log("p3 : ", responseBody);
}).catch(error => {
    console.log("p3 : ", error);
})

/**
 * 결과
    p1 Promise 생성
    p2 Promise 생성
    p3 Promise 생성
    p1 :  정상적인 데이터 응답!
    p3 :  정상적인 데이터 응답!
    p1-2 :  p1 리턴값!
    p2 :  Error: 오류 데이터 응답!
        at c:\gov_edu\html_css_javascript\javascript\09-02.js:36:16
        at new Promise (<anonymous>)
        at Object.<anonymous> (c:\gov_edu\html_css_javascript\javascript\09-02.js:30:12)
        at Module._compile (node:internal/modules/cjs/loader:1730:14)
        at Object..js (node:internal/modules/cjs/loader:1895:10)
        at Module.load (node:internal/modules/cjs/loader:1465:32)
        at Function._load (node:internal/modules/cjs/loader:1282:12)
        at TracingChannel.traceSync (node:diagnostics_channel:322:14)
        at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    p1-3 :  p1-2의 리턴값!

    위 결과를 통해 then()이 catch()보다 우선순위가 더 높다는 것을 알 수 있다. 
    코드 상 순서대로 동작해야 하기 때문에 then()이 먼저 실행될 수 밖에 없다. 
    순서 상 catch()를 건너 뛰어서 then()을 우선 실행한 것이다.
    (우선 순위 : then() > catch())

    그러나 p1-3은 p2의 catch()보다 등록 순서가 늦어서 catch()후에 then()이 실행되었다. 
    즉, then(1), then(2), then(3), catch(4)가 p1의 순서였고, then(1) catch(2)가 p2의 순서였으므로,
    p1의 then(1) -> p1의 then(2) -> p2의 catch(2) -> p1의 catch(3)로 내부에도 순서가 있듯 외부에도 순서가 있다. 
 */

        
