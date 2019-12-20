// Slice e Splice
const arr = [1, 2, 3, 4, 5, 6, 7];
const names = ["Jefferson", "Anderson", "Maria"];

// slice()
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]
console.log(arr.slice(2, 4)); // [3, 4]
console.log(arr.slice(1, 4)); // [2, 3, 4]
console.log(arr.slice(-2)); // [6, 7]
console.log(arr.slice(4, 1)); // []
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]

/**
 * TODO:
 * O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início(begin) e fim(end)(fim não é necessário) de um array original. O Array original não é modificado.
 *
 * (Sintaxe)
 * arr.slice([início[,fim]])
 */

// splice()
console.log(names); // ["Jefferson", "Anderson", "Maria"]
console.log(names.splice(1, 2)); // ["Anderson", "Maria"]
console.log(names.splice(1, 0)); // []
console.log(names); // ["Jefferson"]
console.log(names.splice(1, 0, "Anderson", "Maria")); // []
console.log(names); // ["Jefferson", "Anderson", "Maria"]

/**
 * TODO:
 * O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
 *
 * (Sintaxe)
 * array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])
 */
