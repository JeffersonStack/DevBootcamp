// OPERADOR VIRGULA
let a,
  b = 2,
  c;

function somar() {
  let x = 0;
  return (x += 1), x;
}

console.log(somar());

// ESTRUTURA CONDICIONAL SWITCH
function myFunc(x) {
  switch (x) {
    case 1:
      console.log("é o numero 1");
      break;

    case 2:
      console.log("é o numero 2");
      break;

    case 3:
      console.log("é o numero 3");
      break;

    default:
      console.log("não e um numero");
  }
}

myFunc(1);
