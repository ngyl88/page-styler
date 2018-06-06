// strings vs numbers
console.log(1 + 20);
console.log('1' + '20');
console.log(1 + '20');

// strings vs template strings
console.log("Hello!");
console.log(`hello, 

jumpstart!`);

// constant, cannot be reassigned.
const myVariable = 1;
const myString = "hello";
const myBoolean = true;
//myVariable = 2;
console.log(myVariable);

// variable declaration
let anotherVariable = "hello";
var yetAnotherVariable = 20;
console.log(anotherVariable);
console.log(yetAnotherVariable);
anotherVariable = 2;
yetAnotherVariable = "hello";
console.log(anotherVariable);
console.log(yetAnotherVariable);

//assign variable to variable
const a = "hello";
const b = a;
console.log(b);
const bodyClass = document.body.className;
console.log(document.body.className);