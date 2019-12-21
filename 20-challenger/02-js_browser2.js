(function (win, doc) {
    // DOM

    // getElementById()
    console.log(doc.getElementById('header'));

    // getElementsByClassName()
    console.log(doc.getElementsByClassName('is-imagem'));

    // getElementsByTagName()
    console.log(doc.getElementsByTagName('h1'));

    // getElementsByName()
    console.log(doc.getElementsByName('username'));

    // querySelector()
    console.log('class', doc.querySelector('.btn'));
    console.log('type', doc.querySelector('[type="submit"]'))

    // querySelectorAll()
    console.log(doc.querySelectorAll('.input'))
})(window, document)