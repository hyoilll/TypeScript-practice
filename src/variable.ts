let cnt = 0;
cnt += 1;
// cnt = 'hi'; error

const meg:string = 'hello';

const done:boolean = true;

const numbers:number[] = [1,2,3];
const megs:string[] = ['hello', 'world'];

// megs.push(1); error
megs.push('1');

let mightBeUndefined: string | undefined = undefined;
let nullableNumber:number | null = null;

let color: 'red' | 'orange ' | 'yellow';
// color = 'green' error
color = 'red';

