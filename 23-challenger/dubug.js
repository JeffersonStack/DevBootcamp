(function () {
    'use strict';

    function sum() {
        return Array.prototype.reduce.call(arguments, function (acum, actual) {
            return Number(acum) + Number(actual);
        })
    }

    console.log(sum(1, 26, 35))
})()