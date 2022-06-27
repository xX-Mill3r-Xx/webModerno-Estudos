//Usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções Construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2999.90, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Funçao Factory
function CriarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = CriarFuncionario('Miller', 7980, 4)
console.log(f1.getSalario())

//Object.Create
const filho = Object.create(null)
filho.nome = 'MillerJr'
console.log(filho)

// JSON.Parse
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)