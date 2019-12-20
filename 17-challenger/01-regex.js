// Regex (Expressões Regulares)

// Objeto RegExp()
// Literais
let text =
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.";

console.log(text.match(/of/gi));

/**
 * Termos
 * 
 * \w - Corresponde qualquer caractere alfanumérico do alfabeto basic Latin, incluindo o underline. Equivalente a [A-Za-z0-9_]. Por exemplo, /\w/ corresponde "a" em "apple", "5" em "$5.28", e "3" em "3D".
 * 
 * \d - Corresponde qualquer caractere alfanumérico do alfabeto basic Latin, incluindo o underline. Equivalente a [A-Za-z0-9_]. Por exemplo, /\w/ corresponde "a" em "apple", "5" em "$5.28", e "3" em "3D".  
 */

console.log(text.match(/\w/g));
console.log(text.match(/\d/g));

console.log(text.match(/[a-zA-Z0-9]/g));