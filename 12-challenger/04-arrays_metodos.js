// ARRAYS MÉTODOS
const arr = [];

// Adicionando elementos pelo indice
arr[0] = "Gabriela";
arr[1] = "Millena";
arr[2] = "Kellen";

// Adicionar elementos ao array - push('elemento')
arr.push("Anderson");
arr.push("Maria");
arr.push("Jefferson");
console.log(arr); // ["Gabriela", "Millena", "Kellen", "Anderson", "Maria", "Jefferson"]

// Remover ultimo elementos do array - pop()
arr.pop();
console.log(arr); // ["Gabriela", "Millena", "Kellen", "Anderson", "Maria"]
arr.pop();
console.log(arr); // ["Gabriela", "Millena", "Kellen", "Anderson"]

// Juntar - join()
console.log(arr.join()); // Gabriela,Millena,Kellen,Anderson
console.log(arr.join(" ")); // Gabriela Millena Kellen Anderson
console.log(arr.join("/")); // Gabriela/Millena/Kellen/Anderson

// Reverter - reverse()
console.log(arr); // ["Gabriela", "Millena", "Kellen", "Anderson"]
console.log(arr.reverse()); // ["Anderson", "Kellen", "Millena", "Gabriela"]
console.log(arr.reverse()); // ["Gabriela", "Millena", "Kellen", "Anderson"]

// Ordenar em ordem alfabetica e numerica - sort()
console.log(arr); // ["Gabriela", "Millena", "Kellen", "Anderson"]
console.log(arr.sort()); // ["Anderson", "Gabriela", "Kellen", "Millena"]

const num = [1, 2, 8, 9, 6, 3, 5];
console.log(num); // [1, 2, 8, 9, 6, 3, 5]
console.log(num.sort()); // [1, 2, 3, 5, 6, 8, 9]
