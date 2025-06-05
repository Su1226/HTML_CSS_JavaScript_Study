let studentInputValues = {
    name: "",
    age: "",
    address: "",
}

function handleResgiesterOnkeyup(e) {
    studentInputValues = {
        ...studentInputValues,
        [e.target.name]: e.target.value,

    }
}

const handleResgiesterOnclick = (e) => {
    studentList = [...studentList, studentInputValues];
    studentInputValues = {
        name: "",
        age: "",
        address: "",
    }

    console.log(studentList);
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