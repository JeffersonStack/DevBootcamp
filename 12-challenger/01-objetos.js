// CRIAÇÃO DE OBJETOS

// - OBJETOS SAO MUTAVEIS
const obj = {
  prop1: "prop1",
  prop2: "prop2"
};

console.log(obj.prop1);
console.log(delete obj.prop1); // delete prop1
console.log(obj); // {prop2: 'prop2'}
obj.prop1 = "prop1";
console.log(obj); // {prop2: "prop2", prop1: "prop1"}

// - Manipulados por referencia
const obj2 = {
  prop1: "prop1",
  prop2: "prop2"
};

console.log(obj === obj2); // false

const objCopy = obj;
console.log(objCopy); // {prop2: "prop2", prop1: "prop1"}

objCopy.prop1 = "Modificado por referencia";
console.log(objCopy); // {prop2: "prop2", prop1: "Modificado por referencia"}
console.log(obj); // {prop2: "prop2", prop1: "Modificado por referencia"}
console.log(objCopy === obj); // true

// Literais
const lit = {};
console.log(lit); // {}

// Construtor()
const con = new Object();
console.log(con); // {}

// Object.create()
console.log(Object.create(lit)); // {}
