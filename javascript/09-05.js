// function getData1() {
//     return new Promise();
// } // 호출하면 Promise이다.

// async function getData2() {
        // Promise를 나타내는 단어가 async이다. 
// } // 호출하면 Promise이다.

// getData1().then();
// getData2().then();

// then() 실행 함수를 매개변수로 값을 넘기는 방법 
function getData3() {
    return new Promise((rs, rj) => {
        rs("데이터");
    });
} // 호출하면 Promise이다.

// 1과 2, 3과 4는 서로 같은 코드이다. 

async function getData4() {
    return "데이터";
} // 호출하면 Promise이다.

// 그렇기 때문에 다음과 같이 then()을 넣을 수 있다. 
// 또한 then()안에 매개변수 함수를 넣을 수 있다. 
getData3().then(r => console.log(r));
getData4().then(r => console.log(r));

function getData5(isError) {
    return new Promise((rs, rj) => {
        if(isError) {
            rj(new Error("오류!!"));
        }
        rs("데이터");
    });
}

async function getData6(isError) {
    if (isError) throw new Error("오류!");
    return "데이터";
} 

getData5(true).then(r => console.log(r)).catch(e => console.error(e));
getData6(true).then(r => console.log(r).catch(e => console.error(e)));

// await으로 then 또는 catch 처리 방법
// console.log(await getData3());  // resolve의 매개변수 값을 바로 받아온다.
// console.log(await getData4());  // return 값을 바로 받아온다. 

// await의 경우, 예외 처리는 try-catch문을 이용해야 한다. 

try {
    console.log(await getData5());
} catch (error) {
    console.error(error);
}


try {
    console.log(await getData6());
} catch (error) {
    console.error(error);
}

// 일반 함수 안에서는 await를 쓸 수 없다. 
// 즉, await를 쓰로 싶다면 async 키워드를 붙여줘야 한다. 
async function fx() {
    try {
        console.log(await getData5());
    } catch (error) {
        console.error(error);
    }
}