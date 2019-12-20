// teste 01

function mynum(a, b, c) {
  if (a === undefined || b === undefined || c === undefined) {
    return "Preencha todos os valores corretamente!";
  } else {
    return a * b * c + 2;
  }
}

console.log(mynum(2, 3, 5));

// teste 02

function sumNumber(x, y, z) {
  if (x !== undefined && y === undefined && z === undefined) {
    return x;
  } else if (x !== undefined && y !== undefined && z === undefined) {
    return x + y;
  } else if (x !== undefined && y !== undefined && z !== undefined) {
    return (x + y) / z;
  } else if (x === undefined && y === undefined && z === undefined) {
    return false;
  } else {
    return null;
  }
}

console.log(sumNumber(10, 2, 6));
