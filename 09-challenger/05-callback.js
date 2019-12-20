/*
function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  var name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);
*/

// Meus testes
function userName(user) {
  console.log(`Nome do usuario ${user}`);
}

function setUser(callback) {
  let user = prompt(`Ensira seu nome:`);
  return callback(user);
}

setUser(userName);
