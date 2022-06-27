let valor; // não iniciada;
console.log(valor);

valor = null; // variavel não aponta pra nenhum valor;
console.log(valor);
//console.log(valor.toString()); //Erro! não é possivel ler oum valor nullo em uma variavel;

const produto = {}
console.log(produto.preco);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined // evitar atribuir undefined;
console.log(produto.preco);
//delete produto.preco // para tirar o atributo de uma variavel;
console.log(produto);

produto.preco = null; // sem preço;
console.log(!!produto.preco);
console.log(produto);