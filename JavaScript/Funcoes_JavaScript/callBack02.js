const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0]

//sem o uso do call back
let notasBaixas =[]
for(let i in notas){
    if(notas[i]<7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//usando o call back
notasBaixas = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas)

//usando Arrow e call back
const notasbaixas3 = notas.filter(nota => nota<7)
console.log(notasbaixas3)