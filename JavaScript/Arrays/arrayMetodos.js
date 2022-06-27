const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // Remove o ultimo elemento da lista
console.log(pilotos)

pilotos.push('Vestappen') // adciona em ultimo elemento da lista
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona em primeiro lugar da lista
console.log(pilotos)

//splice pode adicionar e remover elemnetos
pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1) // massa vai ser removido
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)