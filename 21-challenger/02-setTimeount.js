(function(window, document) {
  "use strict";

  // setTimeount
  // setTimeout(function() {
  //   console.log("Olá Mundo!!");
  // }, 40000);


  let button = document.querySelector('[data-js="button"]');
  let counter = 0;
  let temporizador;
  function timer() {
    console.log('Timer:', counter++);
    if(counter > 10) {
      return;
    }

    temporizador = setTimeout(timer, 1000);
  }

  button.addEventListener('click', function(){
    clearTimeout(temporizador);
  }, false)

  timer();
})(window, document);
