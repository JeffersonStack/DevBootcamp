// FUNCTIONAL PROGRAMMING

// Return Objects
function myObject() {
  return {
    firstName: "Jefferson",
    lastNama: "Telles"
  };
}

console.log(myObject()); // { firstName: 'Jefferson', lastName: 'Telles' };
console.log(myObject().firstName); // Jefferson

function myObject2() {
  let obj = {
    firstName: "Anderson",
    lastNama: "Telles"
  };

  return obj;
}

console.log(myObject2()); // { firstName: 'Anderson', lastName: 'Telles' };
console.log(myObject2().lastNama); // Telles

// Return function
function addSum(x) {
  return function(y) {
    return x + y;
  };
}
/*
let add = addSum(2);
console.log(add(5)); => 7
console.log(addSum(5)(5)); => 10
*/

function addSum2(x) {
  function outher(y) {
    return x + y;
  }
  return outher;
}
/*
let add = addSum2(2);
console.log(add(2)); => 4
console.log(addSum2(4)(4)); => 8
*/
