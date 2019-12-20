// Atividades Challenger 08

// Questao 01
let sum = function calculateSum(x, y) {
  return x + y;
};

// Questao 02
let value1 = 10;
let value2 = 20;
console.log(
  `A soma de ${value1} e ${value2} é igual a ${sum(value2, value2)}.`
);

// Questao 03
console.log(`O nome da função que faz a soma é ${sum.name}.`); // O nome da função que faz a soma é calculateSum.

// Questao 04
function showName() {
  return "Jefferson Teles";
}

// Questao 05
let varShowName = showName;

// Questao 06
console.log(`A função ${varShowName.name} retorna ${varShowName()}.`); // A função showName retorna showName.

// Questao 07
function calculator(operador) {
  return function(x, y) {
    let total;

    switch (operador) {
      case "+":
        total = x + y;
        break;

      case "-":
        total = x - y;
        break;

      case "*":
        total = x * y;
        break;

      case "/":
        total = x / y;
        break;

      case "%":
        total = x % y;
        break;

      default:
        return "Operação inválida.";
    }

    return `Resultado da operação: ${x} ${operador} ${y} = ${total}.`;
  };
}

// Questao 08
let sum2 = calculator("+");

// Questao 09
console.log(sum2(2, 6));

// Questao 10
let subtraction = calculator("-");
let multiplication = calculator("*");
let division = calculator("/");
let mod = calculator("%");

// Questao 11
console.log(subtraction(6, 2));
console.log(multiplication(10, 5));
console.log(division(30, 2));
console.log(mod(10, 3));
console.log(subtraction(6, 2));
