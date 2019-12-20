// Atividades challenger 7

// Questao 01
let arr = ["Teles", 26, { nome: "Jefferosn" }, null, undefined];

// Questao 02
function addItem(item) {
  return arr.push(item);
}

console.log(addItem("laranja"));
console.log(arr);

// space
console.log("");

// Questao 03
arr.push(["Ana", 30, true]);
console.log(arr);

// space
console.log("");

// Questao 04
console.log(`O segundo elemento do segundo array é ${arr[6][1]}.`);

// space
console.log("");

// Questao 05
console.log(`O primeiro array tem ${arr.length - 1} itens.`);

// space
console.log("");

// Questao 06
console.log(`O segundo array tem ${arr[6].length} itens.`);

// space
console.log("");

// Questao 07
let num = 10;
while (num <= 20) {
  num % 2 === 0 ? console.log("Números pares entre 10 e 20: " + num) : "";
  num++;
}

// space
console.log("");

// Questao 08
let num2 = 10;
while (num2 < 20) {
  num2 % 2 === 1 ? console.log("Números pares entre 10 e 20: " + num2) : "";
  num2++;
}

// space
console.log("");

// Questao 09
for (let i = 100; i <= 120; i++) {
  i % 2 === 0 ? console.log("Números pares entre 100 e 120: " + i) : "";
}

// space
console.log("");

// Questao 09
for (let x = 100; x <= 125; x++) {
  x % 2 === 1 ? console.log("Números pares entre 100 e 120: " + x) : "";
}
