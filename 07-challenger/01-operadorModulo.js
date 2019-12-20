// OPERADOR MODULO - % - RETORNA O RESTO DE DIVISÃO
let a = 5 / 2; // 2.5
let b = 5 % 2; // 1

console.log(a);
console.log(b);

// Recuperando os pares
let num = 0;
while (num <= 20) {
  num % 2 === 0 ? console.log(num) : "";
  num++;
}
