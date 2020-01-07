// Métodos Prototype

// Object.prototype.constructor
function MyFunction(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

MyFunction.prototype.fullName = function () {
    return `Olá eu sou ${this.nome} ${this.sobrenome} é tenho ${this.idade} anos!!`;
}

const name = new MyFunction('Jefferson', 'Teles', 26);
console.log(name.fullName()); // Olá eu sou Jefferson Teles é tenho 26 anos!!

// Object.prototype.hasOwnProperty()
// O método hasOwnProperty() retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão (ao contrário de uma propriedade herdada).
console.log(name.hasOwnProperty('idade')) // true
console.log(name.hasOwnProperty('sobrenome')); // true
console.log(name.hasOwnProperty('sexo')); // false

// Object.prototype.isPrototypeOf()
// O método isPrototypeOf() checa se um objeto existe em na cadeia de protótipos de um outro objeto
function Foo() { }
function Bar() { }
function Baz() { }

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

const baz = new Baz();

console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(baz)); // true