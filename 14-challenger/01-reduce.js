// REDUCE()
let arr = [1, 2, 3, 4, 5, 6];

let reduce = arr.reduce((acum, item, index, array) => {
  return acum + item;
}, 0);

console.log(reduce); // 21

/**
 * TODO:
 *
 * O método reduce()executa uma função reducer (provida por você) para cada membro do array, resultando num único valor de retorno.
 */

// REDUCERIGHT()
let arr2 = ["J", "e", "f", "f", "e", "r", "s", "o", "n"];

let reduceRigth = arr2.reduceRight((acum, item, index, array) => {
  return acum + item;
});

console.log(reduceRigth); // nosreffeJ

/**
 * TODO:
 *
 * O método reduceRight() aplica à uma função um acumulador e cada valor do array (da direita para esquerda) é reduzido para um valor único.
 */
