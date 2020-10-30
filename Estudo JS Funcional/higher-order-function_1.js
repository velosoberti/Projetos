//Funções que operam em outras funções, tomando-as como argumentos
//ou retornando-as, são chamadas de Higher Order Functions

function exec(fn, ...params){
    return function(text){
        return `${text} ${fn(...params)}`
    }
}

function somar (a, b, c){
    return a + b + c
}

function multi(a, b){
    return a * b
}

const r1 = exec(somar, 2, 4, 6)('O resultado da soma é:')
const r2 = exec(multi, 4, 10)('O resultado da multi é:')