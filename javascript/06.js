/**
 단순 평가 논리 연산
 */

 const name = "이수원";
 console.log(name && `이수원`); 
 console.log(!!name && !!`이수원`);

 // 앞쪽이 true이면 값을 가져온다.
 // && 연산 -> 앞의 값이 true 일 때, 뒤의 값을 리턴하고 false일 때 false를 추력
 console.log(!!name && !!'이수원');
 console.log(false && 10 );

 // false 일 떄는 뒤의 값을 가져옴.
// || 연산 : 앞의 값이 false 일 떄, 뒤의 값을 리턴하고 true일 때 true를 처리
 console.log(true || 10);
console.log(false || 10);

// ?? 연산 : 앞의 값이 null 또는 undefined가 아니라면 앞의 값, 그 외에는 뒤의 값.
console.log(null ?? 100);
console.log(20 ?? 100);

// nullish 변환연산 

 