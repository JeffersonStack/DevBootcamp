// TYPEOF
let value1 = "olá mundo!";
let value2 = 26;
let value3 = {};
let value4 = [];
let value5 = null;
let value6 = undefined;

console.log(typeof value1); // string
console.log(typeof value2); // Number
console.log(typeof value3); // Object
console.log(typeof value4); // Object ? erro na documentacao do javascript
console.log(typeof value5); // Object ? erro na documentacao do javascript
console.log(typeof value6); // Undefined

let arr = [1, 2, 3, 4];
console.log(typeof arr); // object
console.log(Array.isArray(arr)); // true
