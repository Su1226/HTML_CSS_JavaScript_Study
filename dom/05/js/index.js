window.onload = () => {
    const root = document.querySelector("#root");
    render(root);
    loadStudentList();
}

// function render(rootElement) {
//     rootElement.innerHTML = app(); 
// } // 초기 화면을 뿌려줄 때 사용했던 것

function render(targetElement) {
    targetElement.innerHTML = app();
}