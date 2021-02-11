
// 1. 함수에서 generics 사용
function merge<A,B>(a: A, b: B): A & B{
    return{
        ...a,
        ...b
    };
}

const merged = merge({foo:1}, {bar:1})
console.log(merged)

function wrap<T>(param: T){
    return {
        param
    };
}

const wrapped = wrap('10');
console.log(wrapped)

//----------------------------------------------
// 2. interface에서 generics 사용

interface Items<T>{
    list: T[];
}

const items: Items<string> = {
    list:['hello', 'world'],
}

//----------------------------------------------
// 3. class에서 generics 사용

class Queue<T>{
    list:T[] = [];

    get length(){
        return this.list.length;
    }

    enqueue(item: T){
        this.list.push(item);
    }

    dequeue(){
        return this.list.shift()
    }
}

const queue = new Queue<number>()
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())