function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('aprovado com ' + nota)
    }
}

soBoaNoticia(8.1) // vai imprimir somente esse
soBoaNoticia(6.1)

function seForverdadeEuFalo(valor){
    if(valor){
        console.log('é verdade...' + valor)
    }
}
seForverdadeEuFalo() // não imprime porque é indefinido
seForverdadeEuFalo(null) // não imprime porque é nulo
seForverdadeEuFalo(undefined) // retorna falso
seForverdadeEuFalo(NaN)
seForverdadeEuFalo('')
seForverdadeEuFalo(0)
seForverdadeEuFalo(-1)
seForverdadeEuFalo(' ') //verdadeira
seForverdadeEuFalo('?')
seForverdadeEuFalo([])
seForverdadeEuFalo([1,2])
seForverdadeEuFalo({})