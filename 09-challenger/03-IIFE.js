// IIFE - (Immediately Invoked Function Expression) é uma função em JavaScript que é executada assim que definida.

(function() {
  console.log(1 + 3);
})(); // 4

let sum = (function() {
  console.log(5 + 5);
})();

let result = (function() {
  let nome = "Jefferson";
  return nome;
})();

console.log(result);
