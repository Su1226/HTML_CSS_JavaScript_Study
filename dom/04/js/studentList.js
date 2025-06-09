function handleDeletButtonOnclick(studentId) {
    if (!confirm("삭제하시겠습니까?")) return;
    studentList = studentList.filter(student => student.id !== studentId);
    loadStudentList();
}


function loadStudentList() {
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
}