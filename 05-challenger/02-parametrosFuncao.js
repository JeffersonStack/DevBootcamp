// PARAMENTROS DE FUNCAO

// Arrays - []
let arr = [1, 2, 3, 4, 5];

function myfunction(arg) {
  return arg;
}

console.log(myfunction(arr)); // [1, 2, 3, 4, 5]

function myfunction2(arg) {
  return arg[2];
}

console.log(myfunction2(arr)); // 3

// Objetos - {}
let obj = {
  id: 1,
  user: "Jefferson",
  curse: "Curso Javascript Ninja!"
};

function myUser(arg) {
  return arg;
}

function myUser2(arg) {
  return arg.curse;
}

console.log(myUser(obj)); // {id: 1, user: 'Jefferson', curse: 'Curso Javascript Ninja!'}
console.log(myUser2(obj)); // Curso Javascript Ninja!
