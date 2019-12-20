// FUNCOES

// funcoes dentro do escopo
function nome() {
  let x = 1;
  x++;
  console.log(x);
}

nome();

// funcoes fora do escopo
let y = 2;
function soma() {
  return y;
}

console.log(soma());

// funcoes com parametros
function nomes(nome) {
  return nome;
}

console.log(nomes("Jefferson"));
