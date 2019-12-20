(function() {
  // Object This
  let person = {
    person1: "Person",
    init: function() {
      return this;
    }
  };

  console.log(person.init() === window); // false

  /**
   * TODO:
   *
   * This retorna o proprio objeto
   */

  // Function This
  function myFunction() {
    return this;
  }

  console.log(myFunction() === window); // true

  /**
   * TODO:
   *
   * This retorna o objeto window
   */

  // THIS

  /**
   * TODO:
   * 
   * A palavra-chave this comporta-se um pouco diferente em Javascript se comparado com outras linguagens. Também     possui algumas diferenças entre o modo estrito e o modo não estrito.

    Em muitos casos, o valor this é determinado pela forma como a função é chamada. Ele não pode ser assinado durante a execução, e isso pode ser diferente a cada vez que a função é chamada. ES5 introduziu o método bind para estabelecer o valor this da função, independentemente de como ela seja chamada, e ECMAScript 2015 introduziu o arrow functions, cujo this é lexicalmente delimitado (o valor this é estabelecido segundo o escopo de execução no qual está inserido).
   */

  //  Contexto global

  console.log(this.document === document); // true

  // Em navegadores web, o objeto window é também o objeto global:
  console.log(this === window); // true

  this.a = 26;
  console.log(window.a); // 26

  // Contexto de função

  /**
   * TODO:
   *
   * Dentro de uma função, o valor de this depende de como a função é chamada.
   */

  function f1() {
    return this;
  }

  console.log(f1() === window); // true

  // Constructor
  function MyConstructor() {
    this.prop1 = "prop1";
    this.prop2 = "prop2";
  }

  let constructor = new MyConstructor();
  console.log("Constructor: ", constructor.prop1); // prop1
})();
