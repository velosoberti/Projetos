function composicao(fn1, fn2){
    return function (valor){
        return fn2(fn1(valor)) //essa é a composição de função, uma função retorna valor para outra função
    }
}


function composicao2(...fns){ //os '...' representa um array
    return function (valor){
        return fns.reduce((acc, fn) =>{
            return fn(acc)
        }, valor)
    }
}
function composicao2(...fns){ //os '...' representa um array
    return function (valor){
        return fns.reduce((acc, fn) =>{
            return fn(acc)
        }, valor)
    }
}

function gritar(texto){
    return texto.toUpperCase()
}

function enfatizar(texto){
    return `${texto}!!!`
}

const resultado = composicao2( //posso compor funções dentro de uma só
    gritar,
    enfatizar
)('para')

console.log(resultado)

//VOCE PODE USAR O CURRYING AQUI TBM... você deixa o código mais flexível e pode usá-lo como quiser, fazendo uso de functions intermediarias
const exagerar = composicao2(
    gritar,
    enfatizar
)
const exagerarMenos = composicao2( 
    gritar
)

const resultado3 = exagerarMenos('Para')
const resultado2 = exagerar('Para')
console.log(resultado2)
console.log(resultado3)