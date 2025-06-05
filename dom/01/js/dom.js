const name = "이수원";
const age = 25;

const person1 = {
    name: name,
    age: age,
}

// 사용하고자 하는 키 값의 변수명이 값의 변수값이 같다면 생략 가능.
const person2 = {
    name,
    age,
    address: "부산 사상구",
}

// 1. ID로 가져오는 방법
const title1 = document.getElementById('title');
console.log({title1});
// 중괄호 {}로 감싸면 객체가 된다. 
// 위와 같이 객체로 표현하지 않으면, 태그로 보며진다.
// 객체로 표현하면, 아이디값으로 표현된다. 

console.log(person1);
console.log(person2);


// 2. CLASS로 가져오는 방법
const titles = document.getElementsByClassName("title");
console.log({titles});  
// 복수의 클래스를 가진 경우에는 리스트로 출력되며,
// 하나만 있더라도 무조건 리스트에 담겨서 들어온다.
// 때문에 0번째 접근이 필수. 


// 3. Tag로 가져오는 방법
const h3s = document.getElementsByTagName("h3");
console.log({h3s});

// const d1 = document.getElementById("d1");
// const d2 = d1.getElementById("d2");
// d2는 d1의 자식 요소 이기 때문에
// document 말고, d1이라고 쓸 수 있다. 

console.log(document);


// 이전에는 위의 방법이 많이 사용되었으나,
// 현재는 css에 접근하는데 편리성으로 인해 query---문을 사용한다. 

const title1q = document.querySelector("#title");
const titles2 = document.querySelectorAll(".title");   
// `.`은 클래스를 의미한다.
// querySelector의 경우에는 무조건 하나만 가져온다.
// 모두 가져오기 위해서는 querySelectorAll을 써야 한다. 
// 결과값은 리스트로 반환된다. 
const h3s2 = document.querySelectorAll("h3");
const d1 = document.querySelector("#d1");
const d2 = document.querySelector("#d2");
// `#`은 태크를 의미한다. 
const d3 = document.querySelector("#d1 > #d2");

console.log(titles2);
console.log(d1);
console.log(d2);
console.log(d3);

d3.innerText = "<p>innerText</p>"; 
// TEXT 노드를 추가하라는 의미. 
// 태그도 텍스트로 들어간다. 
d3.innerHTML += "<p>innerText</p>";
// 태그 요소로 넣기 위해서는 TEXT가 아닌 HTML로 
// 작성을 해야만 태그의 설정이 적용된다. 
// 만약 `+`를 붙이지 않고, innerText 후 innerHTML을 사둉하게 되면,
// innerText가 덮어쓰여져서 innerHTML만 보이게 된다. 

const students = [
    {
        name: "이수원",
        age : 25,
        address: "부산 사상구",
    },
    {
        name: "이수이",
        age : 22,
        address: "부산 부산진구",
    },
    {
        name: "이수삼",
        age : 23,
        address: "부산 해운대구",
    },
];

const studentTableBody = document.querySelector(".student-table > tbody");

const studentTrs = students.map((s, index) => {
    return `
        <tr>   
            <td>${index + 1}</td>
            <td>${s.name}</td>
            <td>${s.age}</td>
            <td>${s.address}</td>
        </tr>  `
}) // ``를 용하면 값을 쉽게 가져올 수 있다. 

console.log(studentTrs);    
console.log(studentTrs.join(""));   

studentTableBody.innerHTML = studentTrs.join("");

// 속성은 직접 넣을 수 있다.
const tdList = studentTableBody.querySelectorAll("td");
// tdList.forEach(td => td.setAttribute("style", "border: 1px solid #000;"));
tdList.forEach(td => td.style = "border: 1px solid #000;");
// but. tag 안에는 가능한 style을 넣지 말 것. 
// css에서 우선순위로 인해 적용이 되지 않을 수도 있기 때문에
// 가능한 style은 css를 활용하여 사용한다. 
// 위 코드는 td의 태그 모두 style이 들어가게 된다. 

const studentTable = document.querySelector(".student-table");
studentTable.classList.add("table-border"); 
// js폴더에서 css에 있는 값을 추가 시키고 싶다면? 이렇게 적용하면 된다.
// 그러면 태그 안에 css를 추가하지 않더라도 모양은 유지된다! 