function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let op = -1

do{
    op = getInteiroAleatorioEntre(-1,10)
    console.log(`op escolhida ${op}`)
}while(op != -1)
console.log()
console.log('Fim do programa')

/*
    Fala galera! Tudo bom?

    Diferente da estrutura While, o Do/While não é necessário atribuir um valor inicial para a variável opcao, ou seja, fazendo assim:

    function getInteiroAleatorioEntre(min, max) {
        const valor = Math.random() * (max - min) + min
        return Math.floor(valor)
    }
 
    let opcao //somente iniciada a variável, sem valor inicial!
    
    do {
        opcao = getInteiroAleatorioEntre(-1, 10)
        console.log(`Opção escolhida foi ${opcao}.`)
    } while (opcao != -1)
    
    console.log('Até a próxima!')
    Fazendo isso, garante que a estrutura vá rodar pelo menos uma vez.

    Bons estudos!
*/