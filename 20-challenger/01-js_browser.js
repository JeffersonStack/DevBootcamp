(function (win, doc) {
    // Selecionar elementos do browser

    // window.alert
    //console.log(window.alert('windows aberto'))

    // window.prompt
    //console.log(window.prompt('Digite seu nome'));

    // window.confirm
    /*
    let del = confirm('Deseja excluir esse conteudo ?');

    if (del) {
        console.log('Conteudo Excluido com Sucesso')
    } else {
        console.log('Ação Cancelada')
    }
    */

    // window.document
    console.log(doc.getElementById('header'));
    console.log(doc.getElementsByClassName('is-imagem'));
    console.log(doc.getElementsByTagName('h1'));

})(window, document)