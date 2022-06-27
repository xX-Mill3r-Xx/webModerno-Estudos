const prod1 = {
    nome: 'Produto1',
    preco: 45
}

const prod2 = {
    nome: 'Produto2',
    preco: 40
}

//função factory
function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())