let studentInputValues = {
    name: "",
    age: "",
    address: "",
}
// DB에 가져오기 위해 여기서는 ID가 있으면 안된다. 

function handleResgiesterOnkeyup(e) {
    studentInputValues = {
        ...studentInputValues,
        [e.target.name]: e.target.value,
    }
}

async function registerStudentRequest() {   // Promise
    // fetch()는 기본적으로 제공하는 응답요청 API
    try{
        const requestURL = "http://localhost:8080/api/js/students"
        // 요청을 날리기 위한 코드가 필요. JSON을 받아온다. 
        const requestBody = JSON.stringify(studentInputValues);
        const response = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: requestBody,
        }); // fecth()의 결과 

        const responseJson = await response.json();    // .json()도 Promise이기 때문에 await를 넣어줘야 한다. 
        console.log(responseJson);
    } catch(error) {
        console.error(error);
    }
}

const handleResgiesterOnclick = (e) => {
    registerStudentRequest();
    loadStudentList();
}

function studentRegister() {

    return `
        <div>
            ${studentRegisterInput({type: "text", name: "name", onkeyup: "handleResgiesterOnkeyup"})}
            ${studentRegisterInput({type: "text", name: "age", onkeyup: "handleResgiesterOnkeyup"})}
            ${studentRegisterInput({type: "text", name: "address", onkeyup: "handleResgiesterOnkeyup"})}

            <div>
                <button onclick="handleResgiesterOnclick()">등록</button>
            </div>
        
        </div>
    `;
}