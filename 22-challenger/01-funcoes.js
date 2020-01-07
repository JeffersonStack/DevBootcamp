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
     * 
     * O método toString() retorna uma string representando o código fonte da função.
     */

    const arr = [1, 2, 3, 4];
    console.log(arr.toString()); // 1,2,3,4

    console.log(myFunction.toString()); // retorna toda a funcao em formato de string

    /**
     * call
     * 
     * O método call() invoca uma função com um dado valor this  e argumentos passados individualmente.
     * 
     * fun.call(thisArg[, arg1[, arg2[, ...]]])
     */

    function completeName(a, b, c, d) {
        console.log(this.firstName, a, b, c, d);
    }

    const name = {
        firstName: 'Jefferson'
    }

    const name2 = {
        firstName: 'Anderson'
    }

    completeName.call(name2);

    /**
     * apply
     * 
     * O método apply() chama uma função com um dado valor this e arguments providos como uma array (ou um objeto parecido com um array).
     * 
     * fun.apply(thisArg, [argsArray])
     */

    completeName.apply(name, arr);
})()