let studentList = [];
// studentList가 전체적인 데이터를 담는 '상태'.

function app() {
    const appInfo = {
        title: "Component Study",
        date: new Date().toLocaleDateString(),
        author: 'Lee Su-weon',
    }

    return `
        <div>
            <h1>제목: ${appInfo.title}</h1>
            <h2>작성일: ${appInfo.date}</h2>
            <h2>작성자: ${appInfo.author}</h2>
            ${studentRegister()}
            <ul class="student-list"></ul> 
        </div>
        `;
}

// index.js에서 app() 함수를 호출 했으므로,
// 해당 app.js의 app() 함수에서 html을 return 해야 한다.