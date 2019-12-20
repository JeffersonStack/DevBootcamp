// RETURN ARRAYS AND OBJECTS

// Return Array
function myFunction() {
  let names = ["Jefferson", "Anderson", "Maria", "Millena", "Sofia"];
  return names;
}

let value = myFunction();

// TESTES
console.log(value[2]); // Maria
console.log(value[0]); // Jefferson

// Return Object
function myFunction2() {
  return {
    prop1: 1,
    prop2: "Jefferson",
    prop3: function() {
      return "Teles";
    }
  };
}

let value2 = myFunction2();

// TESTES
console.log(value2.prop3());
