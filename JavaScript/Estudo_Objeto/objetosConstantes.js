const pessoa = {nome: 'João'} //Definimos uma constante 'Pessoa' com um atributo nome = João;
pessoa.nome = 'Pedro' // Alteramos o atibuto para pedro;
console.log(pessoa) //Exibimos o objeto;

//pessoa = {nome: 'Ana'} //Isso causa um erro. a constante não pode ser alterada;

Object.freeze(pessoa) //Congelando o objeto pessoa
pessoa.nome = 'Maria' // Tentamos alterar o atributo para maria;
console.log(pessoa.nome) // depois de congelado, o objeto não pode ser mudado;

const pessoaConstante = Object.freeze({nome: 'Carlos'}) //Criando um objeto constante e freeze;
console.log(pessoaConstante.nome)