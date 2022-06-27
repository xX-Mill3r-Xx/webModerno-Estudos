function factoryProduct(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(factoryProduct('NoteBook', 2199.00))