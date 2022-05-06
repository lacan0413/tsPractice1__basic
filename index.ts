let lucky: number = 23;

////////////////////////////////

type Style = string;
let font: Style = 'good';

////////////////////////////////

type Style2 = 'bold' | 'italic' | 23;
let font2: Style2;

////////////////////////////////

interface Person {
    firstName: string;
    lastName: string;
    [key: string]: any
}

const person: Person = {
    firstName: 'Vladimir',
    lastName: 'Putin',
}

const person2: Person = {
    firstName: 'Danold',
    lastName: 'Trump',
}

////////////////////////////////

function pow(a: number, b: number) {
    return Math.pow(a, b).toString;
}
console.log(pow(5, 10));

////////////////////////////////

const aString: string = "一個字串";
console.log(aString);

////////////////////////////////

type aTsList = [number?, string?, boolean?]
const testList: aTsList = [];

testList.push(1);
testList.push('23');
testList.push(false);

console.log(testList);

////////////////////////////////

//Generics
class Observable<T>{
    constructor(public value: T) { }
}

let w: Observable<number>;
let e: Observable<Person>;
let r = new Observable(23);

console.log(r);

////////////////////////////////