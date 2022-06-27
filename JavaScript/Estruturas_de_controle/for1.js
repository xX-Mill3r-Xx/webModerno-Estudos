let contador = 1
while(contador <= 10){
    console.log('valor do contador' + contador)
    contador++
}

//Como escrever um for em JavaScript
for(let i = 1; i <= 10; i++){
    console.log(`Valor do contador ${i}`)
}

//Usando o for em um array
const notas = [6.7,7.4,9.8,8.1,7.7]
for(let x = 0; x <= notas.length; x++){
    console.log(`Valor do array notas = ${notas[x]}`)
}