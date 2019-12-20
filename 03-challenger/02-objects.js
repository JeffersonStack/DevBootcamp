// Object Metods

let Pessoa = {
  nome: "Blazer",
  idade: 26,
  city: "Goiania",
  andar: nome => {
    return `O ${nome}, está andando`;
  },
  aniversario: () => {
    return Pessoa.idade++;
  }
};

// Recuperando a propriedade idade de Pessoa
Pessoa.idade;

// Criando uma nova propriedade para Pessoa
Pessoa.sexo = "Masculino";

/*
Pessoa.andar = function() {
  return "A Pessoa está andando";
};
*/

// Recuperando os methodos
console.log(Pessoa.andar("Jeff"));
console.log(Pessoa.aniversario());
console.log(Pessoa);
