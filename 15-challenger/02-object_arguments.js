(function() {
  // Object Arguments

  /**
   * TODO:
   *
   * O objeto arguments é como um objeto Array correspondendo aos argumentos passados para uma função.
   */

  function myFunction() {
    return arguments[2];
  }

  console.log(myFunction()); // [arguments]
  console.log(myFunction(1, 2, 3, 4)); // 3
})();
