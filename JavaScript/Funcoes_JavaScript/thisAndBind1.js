const pessoa = {
    saldacao: 'Bom Dia',
    falar(){
        console.log(this.saldacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e POO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()