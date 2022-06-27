const fabricaantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricaantes.forEach(imprimir)

fabricaantes.forEach(fabricaantes =>console.log(fabricaantes))
