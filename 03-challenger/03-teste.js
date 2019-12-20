// Questão 01
let carro = {};

// Questão 02
let pessoa = {
  nome: "Jefferson",
  sobrenome: "Telles",
  sexo: "Masculino",
  idade: 26,
  altura: 1.7,
  peso: 81,
  andando: false,
  caminhouQuantosmetros: 0
};

// Questão 03
pessoa.fazerAniversario = function() {
  return pessoa.idade++;
};

// Questão 04
pessoa.andar = function(metros) {
  pessoa.caminhouQuantosmetros += metros;
  pessoa.andando = true;
};

// Questão 05
pessoa.parar = function() {
  pessoa.andando = false;
};

// Questão 06
pessoa.nomeCompleto = function() {
  return `Olá! Meu nome é ${this.nome} ${this.sobrenome}`;
};

// Questão 07
pessoa.mostrarIdade = function() {
  return `Olá, eu tenho ${this.idade} anos!`;
};

// Questão 08
pessoa.mostrarPeso = function() {
  return `Minha peso é ${this.peso}Kg.`;
};

pessoa.mostrarAltura = function() {
  return `Minha altura é ${this.altura}m.`;
};

// Questão 09
pessoa.nomeCompleto(); // Olá! meu nome é Jefferson Telles

// Questão 10
pessoa.mostrarIdade(); // Olá, eu tenho 26 anos

// Questão 11
pessoa.mostrarPeso(); // Meu peso é 81kg

// Questão 12
pessoa.mostrarAltura(); // Minha altura é 1.7m

// Questão 13
pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();

// Questão 14
// 29 Anos

// Questão 15
pessoa.andar(20);
pessoa.andar(30);
pessoa.andar(40);

// Questão 16
// True

// Questão 17
pessoa.parar();

// Questão 18
// false

// Questão 19
// 40 metros

// Questão 20
pessoa.apresentacao = function() {
  // Validation
  let alternarSexo = "o";
  let idadeAnos = "anos";
  let metrosAndados = "metros";

  if (pessoa.sexo === "Feminino") {
    alternarSexo = "a";
  }

  if (pessoa.idade === 1) {
    idadeAnos = "ano";
  }

  if (pessoa.caminhouQuantosmetros === 1) {
    metrosAndados = "metro";
  }

  return `Olá, eu sou ${alternarSexo} ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${idadeAnos}, ${this.altura}, meu peso é ${this.peso} e, só hoje, eu já caminhei ${this.caminhouQuantosmetros} ${metrosAndados}!`;
};

// Questão 21
console.log(pessoa.apresentacao());

// Testes
// console.log(pessoa.andar(30));
// console.log(pessoa.parar());
// console.log(pessoa.nomeCompleto());
// console.log(pessoa.mostrarIdade());
// console.log(pessoa.mostrarPeso());
// console.log(pessoa.mostrarAltura());
console.log(pessoa);
