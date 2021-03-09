// 재귀 함수

function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
}


// 함수 리터럴로 정의한 재귀 함수
var fact = function f(n) {
    if (n <= 1) return 1;
    return n * f(n - 1);
}


// arguments.callee 사용한 익명 함수
var fact = function (n) {
    if (n <= 1) return 1;

    // arguments.callee가 지금 실행 중인 함수 가리킴
    return n * arguments.callee(n - 1);
}
console.log(fact(5));