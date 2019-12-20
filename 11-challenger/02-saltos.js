// SALTOS

// RETURN
function myFunction() {
  let number = 5;
  if (number === 10) {
    return true;
  }

  let number2 = 5;
  let name = "Jefferson";

  return "Meu nome é " + name + " numero: " + number2;
}

console.log(myFunction());

// BREAK
let value = 10;
switch (value) {
  case 1:
    console.log("1");
    break;

  case 2:
    console.log("2");
    break;

  case 10:
    console.log("10");
    break;

  default:
    console.log("default");
}

console.log("Fim do switch");

// BREAK NO FOR
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}
console.log("fim do array", arr.length);

// CONTINUE
for (let i = 0; i < arr.length; i++) {
  if (i === 5) {
    continue;
  }

  console.log(i);
}
console.log("fim do array", arr.length);
