// 가변 길이 인수 목록 (Arguments 객체)
// argument.length : 인수 개수
// arguments.callee :  현재 실행되고 있는 함수의 참조
// Arguments 객체는 유사 배열 객체.
// arguments[i]의 값을 바꾸면 i+1번째 인자가 있을 때 그 값이 함께 바뀜

function myConcat(separator) {  // separator == '/'
    var s = "";
    // separator != arguments
    for (var i = 1; i < arguments.length; i++) {
        s += arguments[i];
        if (i < arguments.length - 1) s += separator;
    }
    return s;
}
console.log(myConcat("/", "apple", "orange", "peach"));