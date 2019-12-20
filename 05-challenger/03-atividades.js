// Questao 01
let num = [1, "Blazer", 1.3, [1, "Jefferson", true], { a: 1, B: 2 }, -6];

// Questao 02
function myArray(arr) {
  return arr;
}

// Questao 03
console.log(myArray(num)[1]);

// Questao 04
function myArrayValues(param, index) {
  return param[2];
}

console.log(myArrayValues(num));

// Questao 05
let arr = ["Jefferson", 26, true, undefined, 1.3];

// Questao 06
function book(bookNames) {
  let livros = {
    "Javascript Ninja": {
      quantidadepaginas: 230,
      autor: "Laura",
      editora: "Brasil Livros"
    },
    "NodeJs com React e Express": {
      quantidadepaginas: 120,
      autor: "John Doe",
      editora: "Americam Books"
    },
    "Aprendendo Ingles do Zero": {
      quantidadepaginas: 80,
      autor: "Mary Joe",
      editora: "Global Books"
    }
  };

  return !bookNames ? livros : livros[bookNames];
}

// Questao 07
console.log(book()); // Retorna todos os livros

// Questao 08
console.log(
  `O livro Javascript Ninja tem ${
    book("Javascript Ninja").quantidadepaginas
  } páginas!`
);

// Questao 09
console.log(
  `O autor do livro NodeJs com React e Express é ${
    book("NodeJs com React e Express").autor
  }.`
);

// Questao 10
console.log(
  `O livro Aprendendo Ingles do Zero foi publicado pela editora ${
    book("Aprendendo Ingles do Zero").editora
  }.`
);
