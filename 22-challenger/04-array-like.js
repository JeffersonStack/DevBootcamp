(function () {
    'use strict';
    // ARRAY LIKE COM ARRAY
    function MyFunction() {
        /*
        Array.prototype.forEach.call(arguments, function (item) {
            console.log(item);
        })
        */

        Array.prototype.forEach.apply(arguments, [function (item) {
            console.log(item);
        }])
    }

    MyFunction(1, 2, 3, 4, 5, 6);
})()