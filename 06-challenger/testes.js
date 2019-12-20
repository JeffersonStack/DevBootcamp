// while - Laço de repetição (Loop);
let x = 0;

while (x < 30) {
  console.log("o numero é " + x++);
}

// Condicional switch
function myfunc(x) {
  switch (x) {
    case 1:
      return "Olá Mundo!";
      break;

    case 2:
      return "Olá mundo! 2";
      break;

    case 3:
      return "Olá Mundo! 3";
      break;

    case 4:
      return "Olá Mundo! 4";
      break;
  }
}

console.log(myfunc(2));
