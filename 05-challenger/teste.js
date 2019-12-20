// Brincando com funcoes e paramentros

// Arrays
const carros = ["Gol", "HB20", "Palio", "Safira"];

function myCarros(arg) {
  return arg[1];
}

console.log(myCarros(carros));

// Object
const Usears = {
  Nomes: "Jefferson",
  Sobrenome: "Teles",
  Idade: 26,
  Sexo: "Masculino",
  Estudante: true
};

function getUsears(param, index) {
  return param.index;
}

console.log(Usears.Sobrenome);

// Parameter Object
const meusAlunos = getParameters => {
  const cadAlunos = {
    aluno1: {
      id: 1,
      nome: "Jefferson",
      sobrenome: "Teles",
      cadastrado: true
    },
    aluno2: {
      id: 2,
      nome: "Jessica",
      sobrenome: "Borges",
      cadastrado: true
    },
    aluno3: {
      id: 3,
      nome: "Anderson",
      sobrenome: "Teles",
      cadastrado: false
    }
  };

  return !getParameters ? cadAlunos : cadAlunos[getParameters];
};

console.log(meusAlunos("aluno1").cadastrado);
