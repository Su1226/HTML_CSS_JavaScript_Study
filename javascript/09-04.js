/**
 * async(비동기 함수 정의 키워드), await(비동기 함수를 동기 호출하는 키워드)
 * - await 키워드는 async 함수 안에서만 사용 가능하다. (단, 전역 호출은 가능.)
*/

async function fx1(isOk) {
    console.log("fx1 호출");
    if (!isOk) throw new Error("오류 발생!!");
    return "정상 리턴";
}

const fx2 = async (isOk) => {
    console.log("fx2 호출");
    if (!isOk) throw new Error("오류 발생!!");
    return "정상 리턴";
}

async function main() {
    let r1 = null;
    fx1(false)
    .then(result => r1 = result)
    .then(() => console.log(r1))
    .catch(error => console.error(error));  // .catch()로 오류를 잡을 수 있다. 

    // await을 하려면, try-catch문을 사용해야 한다. 
    // 그러나 위와 같은 코드이다. 
    // 앞으로는 아래의 코드로 진행. 위 코드는 순서를 알기 위한 코드.
    try {
        let r2 = await fx1(false);
        console.log(r2);
    } catch(error) {
        console.error(error);
    }
}

main();

// 참고 자료 : https://learnjs.vlpt.us/async/