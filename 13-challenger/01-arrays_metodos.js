// Arrays Métodos - toString, concat, unshift, shift

// toString()
const arr = [1, 2, 3, 4, 5];
console.log(arr.toString()); // 1,2,3,4,5
console.log(arr.join()); // 1,2,3,4,5

/**
 * TODO:
 * A diferença do toString para o join e que no join e possivel passar paramentros de seperação de string, ja o toString so retorna a string separado por virgula.
 */

// concat()
console.log(arr); // [1, 2, 3, 4, 5, 6]
console.log(arr.concat(6)); // [1, 2, 3, 4, 5, 6]
console.log(arr); // [1, 2, 3, 4, 5]
console.log(arr.push(6));
console.log(arr); // [1, 2, 3, 4, 5, 6]

/**
 * TODO:
 * A difirença entre concat() e push() e que o concat vai concatenar um valor ao array, mais nao vai modificar o valor original passado por ele, ja o método push(), adiciona um novo valor ao array original modificando ele.
 */

// unshift()
const names = ["Jefferson", "Anderson", "Maria"];
console.log(names); // ["Jefferson", "Anderson", "Maria"]
console.log(names.unshift("Kellen"));
console.log(names); // ["Kellen", "Jefferson", "Anderson", "Maria"]

/**
 * TODO:
 * O método unshift() adiciona um novo valor no começo do array.
 */

// shift()
console.log(names); // ["Kellen", "Jefferson", "Anderson", "Maria"]
console.log(names.shift()); // Kellen
console.log(names); // ["Jefferson", "Anderson", "Maria"]

/**
 * TODO:
 * O método shift() remove o primeiro elemento do array.
 */

/**
 * TODO:
 *
 * - push() Adiciona um novo elemento no array, colocando ele por ultimo.
 * - pop() Remove o ultimo elemento do array.
 * - unshift() Adiciona um novo elemento no array, colocando ele em primeiro.
 * - shift() Remove o primeiro elemento do array.
 */
