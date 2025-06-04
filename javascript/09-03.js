const userList = [
    {id: 1, username: "aaa"},
    {id: 2, username: "bbb"},
    {id: 3, username: "ccc"},
    {id: 4, username: "ddd"},
]

function findUserById(id) {
    return userList.find(user => user.id === id);
}

function getUserById(id) {
    return new Promise((rs, rj) => {
        const foundUser = findUserById(id);
        if(!!foundUser) {       // 해당 자료형이 있으면 실행 (자료형 변환 )
            rs(foundUser);
        } else {
            rj(new Error("해당 ID의 사용자를 찾을 수 없습니다."));
        }
    });
}

let user1 = null;
getUserById(3)  // 외부에서 값을 넣어주기 위해서  다음과 같이 사용한다. 
.then(result => user1 = result)     // 해당 값을 외부로 가져가고 싶다! 할 때 사용하는 것. 
.catch(error => console.log(error));

// 위 내용을 한 줄로 동일하게 만들면,
// 먼저 return이 된다. 
let user2 = await getUserById(3);   // await가 있기 때문에 가능하다. 
console.log("!!!!!!", user2)        // Promise 앞에만 await를 붙일 수 있다. 

// 아래 처럼 하는 것은 불가능. 
// getUserById()의 return type은 Promise이기 때문에, 
// 결과값이 Promise가 나온다. 
let user3 =  getUserById(3);
console.log("!!!!!!", user3);

getUserById(1)
.then(result => console.log(result))
.catch(error => console.log(error));

getUserById(5)
.then(result => console.log(result))
.catch(error => console.log(error));

/**
 * 결과
    { id: 1, username: 'aaa' }
    Error: 해당 ID의 사용자를 찾을 수 없습니다.
        at c:\gov_edu\html_css_javascript\javascript\09-03.js:18:16
        at new Promise (<anonymous>)
        at getUserById (c:\gov_edu\html_css_javascript\javascript\09-03.js:13:12)
        at Object.<anonymous> (c:\gov_edu\html_css_javascript\javascript\09-03.js:27:1)
        at Module._compile (node:internal/modules/cjs/loader:1730:14)
        at Object..js (node:internal/modules/cjs/loader:1895:10)
        at Module.load (node:internal/modules/cjs/loader:1465:32)
        at Function._load (node:internal/modules/cjs/loader:1282:12)
        at TracingChannel.traceSync (node:diagnostics_channel:322:14)
        at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
 */

// 변형 
async function getUserById2(id) {   // async가 붙는 순간 return type은 Promise이다. 
    const foundUser = findUserById(id);
    if(!foundUser) {throw new Error("해당 ID의 사용자를 찾을 수 없습니다.")}    // 비정상적 작동 (reject)
    return foundUser;               // async에는 resolve와 reject가 없다. 즉 정상 return은 resolve가 된다.
}

getUserById(2)
.then(result => console.log(result))
.catch(error => console.log(error));

getUserById(6)
.then(result => console.log(result))
.catch(error => console.log(error));

/**
 * 결과(변형 전 코드도 포함)
    { id: 1, username: 'aaa' }
    { id: 2, username: 'bbb' }
    Error: 해당 ID의 사용자를 찾을 수 없습니다.
        at c:\gov_edu\html_css_javascript\javascript\09-03.js:18:16
        at new Promise (<anonymous>)
        at getUserById (c:\gov_edu\html_css_javascript\javascript\09-03.js:13:12)
        at Object.<anonymous> (c:\gov_edu\html_css_javascript\javascript\09-03.js:27:1)
        at Module._compile (node:internal/modules/cjs/loader:1730:14)
        at Object..js (node:internal/modules/cjs/loader:1895:10)
        at Module.load (node:internal/modules/cjs/loader:1465:32)
        at Function._load (node:internal/modules/cjs/loader:1282:12)
        at TracingChannel.traceSync (node:diagnostics_channel:322:14)
        at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    Error: 해당 ID의 사용자를 찾을 수 없습니다.
        at c:\gov_edu\html_css_javascript\javascript\09-03.js:18:16
        at new Promise (<anonymous>)
        at getUserById (c:\gov_edu\html_css_javascript\javascript\09-03.js:13:12)
        at Object.<anonymous> (c:\gov_edu\html_css_javascript\javascript\09-03.js:58:1)
        at Module._compile (node:internal/modules/cjs/loader:1730:14)
        at Object..js (node:internal/modules/cjs/loader:1895:10)
        at Module.load (node:internal/modules/cjs/loader:1465:32)
        at Function._load (node:internal/modules/cjs/loader:1282:12)
        at TracingChannel.traceSync (node:diagnostics_channel:322:14)
        at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
 */