// 클래스 또는 객체를 위한 타입을 지정할 때 사용됨

// 1. 클래스에서 interface를 implements 하기
interface Shape{
    getArea(): number;
}

class Circle implements Shape{
    // radius: number; 생성자에서 private|public 접근제어자 설정해주면 따로 선언할 필요 없음

    constructor(private radius:number){
        this.radius = radius
    }

    getArea(){
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape{
    // width: number;
    // height: number;

    constructor(private width: number, private height: number){
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
    console.log(shape.getArea())
})

// -----------------------------------------------------------------------
// 2. 일반 객체를 interface로 타입 설정

// interface Person{
//     name: string;
//     age?: number; // ? : 설정을 해도 되고,안해도 됨
// }

// interface Developer{
//     name: string;
//     age?: number;
//     skills: string[];
// }

// Delveloper와 Person이 굉장히 유사하기에 상속을 이용함
interface Person{
    name: string;
    age?: number; // ? : 설정을 해도 되고,안해도 됨
}

interface Developer extends Person{
    skills:string[];
}

const person: Person = {
    name:'hyo il',
    age:28
};

const expert: Developer = {
    name:'programmer',
    skills:['TypeScript', 'React'],
};