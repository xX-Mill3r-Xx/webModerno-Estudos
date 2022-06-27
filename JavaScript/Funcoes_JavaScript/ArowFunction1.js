let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'

console.log(ola())

let miller = function(falar){
    return 'Hi'
}

miller = falar => 'Novo Hi'
console.log(miller())