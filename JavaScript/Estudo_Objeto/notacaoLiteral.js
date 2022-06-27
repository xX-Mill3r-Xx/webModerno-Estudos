const a = 1
const b = 2
const c = 3

const obj = {a, b, c}
console.log(obj)

const nomeAttr = 'Nota'
const ValorAttr = 7.87

const obj2 = {}
obj2[nomeAttr] = ValorAttr
console.log(obj2)

const obj3 = {[nomeAttr] : ValorAttr}
console.log(obj3)

const obj4 ={
    funcao1: function(){
        // execução da função
    },
    funcao2(){
        // forma simplificada
    }
}

console.log(obj4)