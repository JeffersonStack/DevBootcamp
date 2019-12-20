// Map
const arr = [1, 2, 3, 4, 5, 6, 7];

const myArray = arr.map(function(item) {
  return (item += 1);
});

console.log(`array: ${arr}`);
console.log(`myArray: ${myArray}`);

/**
 * TODO:
 * O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado
 *
 * (Sintaxe)
 *
 * arr.map(callback[, thisArg])
 */

// Filter
const filter = arr.filter(function(item) {
  return item > 5;
});

console.log(`Filter: ${filter}`);

/**
 * TODO:
 * O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
 *
 * (Sintaxe)
 *
 * arr.filter(callback[, thisArg])
 */
