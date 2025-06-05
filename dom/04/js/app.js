let studentList = [];

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
        </div>
        `;
}

// index.js에서 app() 함수를 호출 했으므로,
// 해당 app.js의 app() 함수에서 html을 return 해야 한다.