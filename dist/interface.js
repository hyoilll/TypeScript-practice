"use strict";
// 클래스 또는 객체를 위한 타입을 지정할 때 사용됨
var Circle = /** @class */ (function () {
    // radius: number; 생성자에서 private|public 접근제어자 설정해주면 따로 선언할 필요 없음
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    // width: number;
    // height: number;
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
var person = {
    name: 'hyo il',
    age: 28
};
var expert = {
    name: 'programmer',
    skills: ['TypeScript', 'React'],
};
