// Métodos de Objetos
const obj = { x: 1, y: 2 };

const obj2 = Object.create(obj); // Obj2 herda as propriedades do objeto pai - (obj)

obj2.prop1 = "Design";
console.log(obj2); // {}
console.log(obj2.x); // 1

const obj3 = Object.create(obj2);

console.log(obj3); // {}
console.log(obj3.x); // 1

console.log(obj === obj2); // false
console.log(obj2 === obj3); // false

// Object.keys(obj)
console.log(Object.keys(obj)); // ["x", "y"]
console.log(Object.keys(obj2)); // ["prop1"]

// Object.isPrototypeOf(obj)
console.log(obj.isPrototypeOf(obj2)); // true
console.log(obj2.isPrototypeOf(obj)); // false
console.log(obj2.isPrototypeOf(obj3)); // true

// JSON.stringify(obj) - Retorna nosso objeto em uma string
// JSON.parse() - retorna nosso objeto string para objeto
const str = JSON.stringify(obj);

console.log(str); // '{"x":1,"y":2}'
console.log(JSON.parse(str)); // {x: 1, y: 2}
