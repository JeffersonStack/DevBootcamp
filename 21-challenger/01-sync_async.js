(function (window, document) {
    // SYNC E ASYNC

    // Exemplo 1 - iniciando os consoles em sequencia
    /*
    console.log(1);
    console.log(2);
    console.log(3);
    */

    // Exemplo 2
    console.log('inicio'); // iniciado

    document.addEventListener('click', () => {
        console.log('Documento foi clickado!!!');
    }, false) // iniciando por ultimo, pois a operação fica esperando o usuario clicar na janela

    console.log('Fim'); // iniciado
})(window, document)