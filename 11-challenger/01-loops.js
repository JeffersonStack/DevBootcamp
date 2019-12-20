// LOOPS (LAÇOS)

// while
let counter = 1;
while (counter < 10) {
  console.log(counter++);
}

console.log(" ");

// do while
let counter2 = 1;

do {
  console.log(counter2++);
} while (counter2 < 10);

console.log(" ");

// for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// for in
let car = {
  marca: "VW",
  modelo: "Gol",
  ano: 2016
};

for (prop in car) {
  console.log(prop);
}
