let qtdeDeVezesChamada = 0

function somar(a, b){
    qtdeDeVezesChamada++ //efeito colateral observável
    return a + b
}

console.log(qtdeDeVezesChamada)
console.log(somar(2, 5))
console.log(somar(2, 5))
console.log(somar(2, 5))
console.log(somar(2, 5))
console.log(somar(2, 5))
console.log(qtdeDeVezesChamada)
