// forEach
const arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach(function(item) {
  console.log(item); // Retorna os items do meu array
});

/**
 * TODO:
 * O método forEach() executa uma dada função em cada elemento de um array.
 *
 * (Sintaxe)
 *
 * arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);
 */

// every
const every = arr.every(function(item) {
  return item < 5;
});

console.log(every); // false

/**
 * TODO:
 * O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida.
 *
 * (Sintaxe)
 *
 * arr.every(callback[, thisArg])
 */

// some
const some = arr.some(function(item) {
  return item % 2 === 0;
});

console.log(some); // true

/**
 * TODO:
 * O método some() testa se algum dos elementos no array passam no teste implementado pela função atribuída.
 *
 * (Sintaxe)
 *
 * arr.some(callback[, thisArg])
 */
