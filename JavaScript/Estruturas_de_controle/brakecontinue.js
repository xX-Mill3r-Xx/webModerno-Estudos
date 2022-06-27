const nums = [1,2,3,4,5,6,7,8,9,10]

for(x in nums){
    if(x==5){
        break //Causa um desvio de fluxo pra fora do laço
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log('----------------------')

for(y in nums){
    if(y == 5){
        continue //Causa uma interrupção do laço e vai pra proxima sequencia
    }
    console.log(`${y} = ${nums[y]}`)
}

console.log('----------------------')

externo:
for(a in nums){
    for(b in nums){
        if(a == 2 && b ==3) break externo
        console.log(`par = ${a},${b}`)
    }
}

console.log('Fim da execução')