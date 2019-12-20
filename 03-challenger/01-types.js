// Primitive Types and Object Types

// Primitive Types (String, Numbers, Boolean, Undefined, Null);
let nome = "Blazer"; // String
let Num = 26; // Number
let Estudent = true; // Booleans
let deMenor = null;
let undef = undefined;

// Object Types
const Pessoa = {
  nome: "Jefferson",
  idade: 26,
  sexo: "Masculino",
  estudante: true
};

Pessoa.nome; // 'Jefferson'
Pessoa.sexo; // 'Masculino'

let myFunction = function() {
  return "Essa e uma funcao anonima";
};

myFunction(); // 'Essa é uma funcao anonima

// Function Type
console.log(typeof myFunction); // function

// Function is an object
