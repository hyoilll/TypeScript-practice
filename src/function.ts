function sum(x: number, y:number):number{
    return x + y;
}

const result1 = sum(1, 3);

function sumArray(numbers:number[]):number{
    return numbers.reduce((acc, current) => acc + current, 0);
}
// js에 비해 매개변수의 타입유추가 잘 이루어짐 (컴파일 타임에 타입이 정해져 있기 때문, 정적컴파일) 

const result2 = sumArray([1,2,3,4,5]);

