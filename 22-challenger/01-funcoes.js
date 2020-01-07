(function () {
    'use strict'

    // Propriedades e Métodos de funções

    /**
     * .name
     *
     * Retorna o nome de uma função como uma string
     */

    /**
     * .length
     * 
     * Quandtidade de paramentros que uma função pode receber
     */

    function myFunction(a, b, c, d) {
        // cod
    }

    console.log(myFunction.length) // 4 propriedades

    /**
     * toString
     */

    const arr = [1, 2, 3, 4];
    console.log(arr.toString()); // 1,2,3,4

    console.log(myFunction.toString()); // retorna toda a funcao em formato de string

    /**
     * call
     * 
     * O método call() invoca uma função com um dado valor this  e argumentos passados individualmente.
     */

    function completeName(name, sobrenome) {
        this.name = name;
        this.sobrenome = sobrenome;

        return this;
    }

    console.log(completeName()) // Jefferson
    console.log(completeName.call(this)) // Jefferson

})()