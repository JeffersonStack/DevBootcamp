// use strict - Operador delete, objetos e funcoes
(function() {
  "use strict";

  // delete
  let myvar = 2;

  let prop = {
    prop1: "prop1",
    prop2: "prop2",
    prop3: "prop3"
  };

  console.log(delete prop.prop1);

  // Strict em funcoes
  function myFunction(a, a, b) {
    return a + b;
  }

  console.log(myFunction(1, 2, 3)); // SyntaxError: Duplicate parameter name not allowed in this context
})();
