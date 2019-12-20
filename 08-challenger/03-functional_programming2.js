// FUNCTIONAL PROGRAMMING 2

// Passar objetos por parametros
let car = {
  color: "white"
};

function getColorCar(mycar) {
  return mycar.color;
}

console.log(getColorCar(car));

// passando funcao por paramentro
function getMyFunction(func) {
  return func();
}

// Essa funcao vai ser retornada por parametro
function setMyFunction() {
  return "Olá Mundo!!";
}

console.log(getMyFunction(setMyFunction));

// Retornando a funcao dentro da funcao
console.log(
  getMyFunction(function() {
    return "Curso Javascript Ninja!!";
  })
);
