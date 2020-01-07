(function () {
    // Funções Prototype
    // A propriedade Object.prototype representa o Object protótipo do objeto

    // Constructor
    function MyFunction(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        // this.age = 30;
    }

    console.log(MyFunction.prototype.constructor);

    MyFunction.prototype.fullName = function () {
        return this.name + ' ' + this.lastName;
    }

    MyFunction.prototype.age = 26;

    const myName = new MyFunction('Jefferson', 'Teles');
    console.log(myName.fullName()); // Jefferson Teles
    console.log(myName.age); // 26
})()

