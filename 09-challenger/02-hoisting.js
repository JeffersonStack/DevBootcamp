// HOISTING

// Exemplo 01
/*
foo = 2;
let foo;

// console.log(foo); // Cannot access 'foo' before initialization
*/

let foo;
foo = 2;

console.log(foo); // 2

// Exemplo 02
function myFunction() {
  console.log(ninja);
  let ninja = "Eu Sou Ninja";
  console.log(ninja);
}

myFunction(); // Error => Ninja foi atribuido depois da chamada, Usando var retorna undefined e depois o valor da variavel;
