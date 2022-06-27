const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10: 
            console.log('Valor ' + nota)
            break;
        case 9:
            console.log('Valor ' + nota)
            break;
    }
}

imprimirResultado(10)

//Sem o break a sentença swtch executa um em seguida do outro..