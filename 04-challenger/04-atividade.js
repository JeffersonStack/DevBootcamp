// Questao 01
let isTruthy = function(value) {
  return value ? true : false;
};

console.log(isTruthy(26));

// Questao 02
isTruthy(0);
isTruthy(false);
isTruthy(undefined);
isTruthy(null);
isTruthy(-0);
isTruthy("");
isTruthy(NaN);

// Questao 03
isTruthy(10);
isTruthy("jeff");
isTruthy(true);
isTruthy(-26);
isTruthy(new Date());
isTruthy(Infinity);
isTruthy(function() {});
isTruthy({});
isTruthy([]);
isTruthy(2.12);

// Questao 04
let carro = {
  marca: "Hyundai",
  modelo: "HB20",
  placa: "cv2065",
  ano: 2018,
  cor: "preto",
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0
};

// Questao 05
carro.mudarCor = function(cor) {
  carro.cor = cor;
};

// Questao 06
carro.getCor = function() {
  return this.cor;
};

// Questao 07
carro.getModelo = function() {
  return this.modelo;
};

// Questao 08
carro.getMarca = function() {
  return this.marca;
};

// Questao 09
carro.getMarcaModelo = function() {
  return `Esse carro é um ${this.getMarca()} ${this.getModelo()}`;
};

// Questao 10
carro.addPessoas = function(qtdPessoa) {
  let totalPessoas = this.quantidadePessoas + qtdPessoa;
  let pessoascabem = this.assentos - this.quantidadePessoas;
  let letters = pessoascabem === 1 ? "pessoa" : "pessoas";

  if (
    this.quantidadePessoas === this.assentos &&
    totalPessoas >= this.assentos
  ) {
    return "O carro já está lotado!";
  }

  if (totalPessoas > this.assentos) {
    return `Só cabem mais ${pessoascabem} ${letters}!`;
  }
  this.quantidadePessoas += qtdPessoa;

  return `Já temos ${this.quantidadePessoas} pessoas no carro!`;
};

// TESTES QUESTAO 10
console.log(carro.addPessoas(5));
console.log(carro.addPessoas(-4));
// console.log(carro.addPessoas(3));

// Questao 11
carro.getCor(); // Preto

// Questao 12
carro.mudarCor("Vermelho");

// Questao 13
carro.getCor(); // vermelho

// Questao 14
carro.mudarCor("Verde Musgo"); // verde musgo

// Questao 15
carro.getCor(); // Verde Musgo

// Questao 16
carro.getMarcaModelo(); // Esse carro é um Hyundai HB20

// Questao 17
carro.addPessoas(2); // Já temos 2 pessoa no carro

// Questao 18
carro.addPessoas(4); // Só cabem mais 3 pessoas!

// Questao 19
carro.addPessoas(3); // Já temos 5 pessoas no carro!

// Questao 20
carro.addPessoas(-4); // Já temos 1 pessoa no carro

// Questao 21
carro.addPessoas(10); // Só cabem mais 4 pessoas!

// Questao 22
carro.quantidadePessoas; // 1
