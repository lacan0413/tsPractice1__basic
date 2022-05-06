let lucky = 23;
let font = 'good';
let font2;
const person = {
    firstName: 'Vladimir',
    lastName: 'Putin',
};
const person2 = {
    firstName: 'Danold',
    lastName: 'Trump',
};
////////////////////////////////
function pow(a, b) {
    return Math.pow(a, b).toString;
}
console.log(pow(5, 10));
////////////////////////////////
const aString = "一個字串";
console.log(aString);
const testList = [];
testList.push(1);
testList.push('23');
testList.push(false);
console.log(testList);
////////////////////////////////
//Generics
class Observable {
    value;
    constructor(value) {
        this.value = value;
    }
}
let w;
let e;
let r = new Observable(23);
console.log(r);
////////////////////////////////
