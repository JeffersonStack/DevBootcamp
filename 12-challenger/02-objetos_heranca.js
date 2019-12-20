// Objetos Herança
const obj = { x: 1, y: 2 };

const obj2 = Object.create(obj); // Herda os valores do objeto pai.

obj2.prop1 = "Design";
console.log(obj2); // {}
console.log(obj2.x); // 1

const obj3 = Object.create(obj2);

console.log(obj3); // {}
console.log(obj3.x); // 1

console.log(obj === obj2); // false
console.log(obj2 === obj3); // false

// hasOwnProperty
console.log(obj2.hasOwnProperty("x")); // false
console.log(obj2.hasOwnProperty("prop1")); // true
