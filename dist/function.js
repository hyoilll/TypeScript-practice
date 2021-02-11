"use strict";
function sum(x, y) {
    return x + y;
}
var result1 = sum(1, 3);
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
// js에 비해 매개변수의 타입유추가 잘 이루어짐 (컴파일 타임에 타입이 정해져 있기 때문, 정적컴파일) 
var result2 = sumArray([1, 2, 3, 4, 5]);
