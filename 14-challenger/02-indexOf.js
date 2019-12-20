// indexOf()
let arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(3)); // indice 2
console.log(arr.indexOf(1)); // indice 0
console.log(arr.indexOf(3, 4)); // indice -1 - Valor não encontrado

/**
 * TODO:
 *
 * O método indexOf() retorna o índice da primeira ocorrência do valor especificado em searchValue dentro do objeto String para o qual foi chamado, começando a busca a partir de fromIndex. Retorna -1 se o valor não for encontrado.
 *
 * (Sintaxe)
 *
 * str.indexOf(searchValue[, fromIndex])
 */

// lastIndexOf()
console.log(arr.lastIndexOf(3)); // 2
console.log(arr.lastIndexOf(4)); // 3

/**
 * TODO:
 *
 * O método lastIndexOf() retorna o índice da última ocorrência do valor especificado encontrado na String, pesquisando de trás para frente a partir de fromIndex. Retorna -1 se o valor não for encontrado.
 *
 * (Sintaxe)
 *
 * str.lastIndexOf(searchValue[, fromIndex])
 */

// isArray()
console.log(Array.isArray(arr)); // true
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

console.log(typeof arr); // Object
console.log(typeof []); // Object

/**
 * TODO:
 *
 * O método Array.isArray() retorna true se um objeto é uma array, e false se não é.
 *
 * (Sintaxe)
 *
 * Array.isArray(obj)
 */
