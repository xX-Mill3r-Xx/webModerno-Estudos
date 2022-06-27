// coleção dinamica de pares chave/valor
const product = new Object
product.name = 'Cadeira'
product['marca do produto'] = 'Generica'
product.preco = 220

console.log(product)

delete product.preco
delete product['marca do produto']

console.log(product)

const Carro = {
    modelo: 'A4',
    valor: 89000,
    propietario: {
        nome: 'Miller',
        idade: 33,
        endereco:{
            logadouro:'Rua manoel martinez tudella, 135'
        }
    }
}

console.log(Carro.propietario)