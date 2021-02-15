var a = [2, 4, 6];

// 각 값을 문자열로 표현한 후 공백 문자로 구분해서 순서대로 출력
console.log("배열", a,"의 길이는", a.length,"입니다");

// 값을 한 문자열로 연결해서 인수로 넘김으로써 공백 문자 빼고 출력 가능
console.log("배열 "+ a +"의 길이는 "+a.length+"입니다.");

// 서식 문자열 사용하여 값을 지정된 서식으로 변환해서 출력할 수 있음
var name="Tom";
var height = 172.5;
console.log("그의 이름은 %s이며 키는 %fcm입니다.", name, height);


// 객체의 프로퍼티를 목록으로 표시하기
var p = {x:1, y:2};
console.dir(p); // { x: 1, y: 2 }


// 타이머
console.time("answer_time");
alert("확인 버튼을 누르십시오");    // 실행 시간 측정하려는 작업
console.timeEnd("answer_time"); // 소요된 시간 자동으로 측정해줌. answer_time : ~~~ms로 출력됨