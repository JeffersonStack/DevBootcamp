// ARRAY METODO PUSH()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Laranja");
fruits.push(function(x, y) {
  return x + y;
});

console.log(`Possuimos ${fruits.length} elementos no array`);
console.log(fruits[5](2, 3)); // Somando a function no array;
