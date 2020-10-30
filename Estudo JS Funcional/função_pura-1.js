//Uma função pura é uma função em que o valor de retorno é determinado APENAS
// por seus valores de entrada, sem efeitos colaterais observáveis (alterar algo fora da função)

const PI = 3.14

//Função Impura - depende de um valor (ou variável) externa à função
function areaCirculo1 (raio){
    return raio * raio * PI
}

console.log(areaCirculo1(10))

//Função impura - por mais q não puxo de uma variável externa o Math.PI puxa um valor existente fora da função
function areaCirculo2 (raio){
    return raio * raio * Math.PI
}

console.log(areaCirculo2(10))

//Função pura - a função controla o resultado por completo. Não pede nenhum valor fora do seu escopo
function areaCirculo3 (raio, valor){
    return raio * raio * valor
}

console.log(areaCirculo3(10, 3.14))

