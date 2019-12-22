(function (win, doc) {
    'use strict';
    // FORMULARIOS E EVENTOS

    // value
    let $userName = doc.querySelector('#username');
    let $userPassword = doc.querySelector('#password');
    let $button = doc.querySelector('#btn');

    // addEventListener()
    $button.addEventListener('click', function (event) {
        event.preventDefault();

        console.log('clicked on button');
    }, false);

})(window, document)