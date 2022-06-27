{{{{var sera = 'Será???'}}}}
console.log(sera);
// Uma variavel var pode ser acessada mesmo fora de um bloco de execução;

function teste(){
    var local =123;
}
teste();

console.log(local);
// não é possivel acessar externamente uma variavel var que foi declarada dentro de uma cunção;