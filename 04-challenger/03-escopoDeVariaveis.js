// ESCOPO DE VARIAVEIS

// GLOBAL
let nome = "Jefferson";

function myFunction() {
  return nome;
}

// TESTES
console.log(nome);
console.log(myFunction());

// LOCAL
function myFunction2() {
  let nome2 = "Anderson";
  return nome2;
}

// TESTES
console.log(nome2); // return error;
console.log(myFunction2());
