// Constructor RegExp()

let regex = new RegExp('rson');
let name = 'Jefferson';
console.log(name.match(regex));

let regex2 = new RegExp('voce');
let text = 'Olá 123, como esta voce';
console.log(text.match(regex2));

// Método test(string)
console.log(regex2.test(text)); // true
console.log(regex.test(text)); // false

// exec(string) - regexObj.exec(str)
let re = /quick\s(brown).+?(jumps)/ig;
let result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');
console.log(result);