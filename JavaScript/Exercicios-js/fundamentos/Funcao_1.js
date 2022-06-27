//Funçao sem retorno;
function ImprimirSoma(a,b)
{
    //Corpo da função;
    console.log(a+b);
}

ImprimirSoma(2,3); // Chamando a função;
ImprimirSoma(2); // se passarmos apenas um valor, o segundo argumento sera um NaN;
ImprimirSoma(); // se não passar nenhum parametro tambem sera NaN;

//Função com retorno;
function Soma(a, b = 0)
{
    return a + b;
}

console.log(Soma(2,3)); // para imprimir uma função com retorno no console, precisamos chamar esta função dentro de um console.log();
