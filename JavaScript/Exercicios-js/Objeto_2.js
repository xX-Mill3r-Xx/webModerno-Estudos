console.log(typeof Object);
console.log(typeof new Object); // aqui é o mesmo que estar instanciando um a função;

const Cliente = function(){}
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto {}
console.log(typeof Produto);
console.log(typeof new Produto());

// A forma de criar objetos em JS é atravez de função;