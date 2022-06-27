const sequencia ={
    _valor: 1, //convenção de escrita para get and set;
    get valor(){return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this.valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)