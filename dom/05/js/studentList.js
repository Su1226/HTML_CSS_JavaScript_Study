async function handleDeletButtonOnclick(studentId) {
    if (!confirm("삭제하시겠습니까?")) return;
    
    try {
        const response = fetch(`http://localhost:8080/api/js/students/${studentId}`, {
            method: "DELETE",
        });
        
        const responseJson = (await response).json();
        alert(JSON.stringify(responseJson) + "정보 삭제 완료.");
    } catch (error) {
        console.error(error);
    }

    await loadStudentList();
}

async function getStudentAllRequest() {
    try {
        const response = await fetch("http://localhost:8080/api/js/students", {
            method: "GET",      // 생략하면 METHOD는 기본 값은 'GET'이다.
        });
        
        const responseJson = await response.json();
        console.log(responseJson);
        
        studentList = responseJson;
    } catch (error) {
        console.error(error);
    }    
}

// 비동기 처리의 경우, 순서가 중요함을 알 수 있다. 
// 만약 then()이나 async가 없을 경우, 아래 함수가 나중에 실행되고 아래 코드들이 먼저 실행되기 때문에
// 비어있는 값을 출력하게 된다. 

 function loadStudentList() {   // async를 붙이고, 함수에 await를 써도 되지만 -> 해당 함수가 다른 함수에 사용된다면? async를 쓰는 것은 주의. 
     getStudentAllRequest().then(() => {
        // DB를 사용하면 더이상 필요가 없음. 
        const studentLis = studentList
                .map(student => { 
                    const text = `${student.id}. ${student.name}(${student.age}) - ${student.address}`;
                    return `
                        <li>
                            ${text}
                            <button onclick="handleDeletButtonOnclick(${student.id})">삭제</button>
                        </li>
                         `
                    }).join("");

                    // join()을 하는 이유는 뭘까?
                    // .map()은 각각의 학생을 <li>...</li> 형식의 HTML 문자열로 바꿔준다.
                    // 결과는 배열로 반환을 하는데, 
                    // HTML에 바로 넣기 위해서는 문자열이여야 한다. 
                    // 즉 .join("")을 써서 배열을 하나의 문자열로 합쳐주는 것.

                    // .map()만 쓰면 결과는 배열
                    // .join("")을 써야 배열 → 문자열로 바뀜
                    // 문자열로 만들어야 innerHTML 등에 삽입 가능!


    const studentListUl = document.querySelector(".student-list");
    studentListUl.innerHTML = studentLis;
     });
}

