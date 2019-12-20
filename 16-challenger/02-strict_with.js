// use strict - uso do with e global === undefined
(function() {
  //"use strict";
  function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  console.log(new Person("Jefferson", "Teles", 26)); // {name: "Jefferson", lastName: "Teles", age: 26}
  //console.log(Person("Anderson", "Teles", 25)); // undefined

  // with
  let prop = {
    prop1: {
      prop2: {
        prop3: {
          prop31: "prop31",
          prop32: "prop32",
          prop33: "prop33"
        }
      }
    }
  };

  console.log(prop.prop1.prop2.prop3); // {prop31: "prop31", prop32: "prop32", prop33: "prop33"}

  with (prop.prop1.prop2.prop3) {
    console.log(prop31); // prop31
  }
})();

// Global sem o use strict
//console.log(name, lastName, age); // Anderson Teles 25

// Global usando o use strict
//console.log(name, lastName, age); // typeError = Cannot set property 'name' of undefined
