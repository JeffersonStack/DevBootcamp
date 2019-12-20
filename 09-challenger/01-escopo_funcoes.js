// ESCOPO DE FUNÇÕES

// Exemplo 01
function myFunction() {
  function sum() {
    return 1 + 2;
  }

  return sum();
}

console.log(myFunction()); // 3

// Exemplo 02
function myFunction2() {
  let num1 = 2;
  let num2 = 2;

  function sum2() {
    return num1 + num2;
  }

  return sum2();
}

console.log(myFunction2()); // 4
// console.log(sum2()); => sum2 is not defined

// Exemplo 03
function myFunction3() {
  function nomeCompleto() {
    return obj + " " + obj2;
  }

  let obj = "Jefferson";
  let obj2 = "Telles";

  return nomeCompleto();
}

console.log(myFunction3()); // Jefferson Telles
