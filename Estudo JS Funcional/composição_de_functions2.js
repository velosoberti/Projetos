function composicao2(...fns){ 
    return function (valor){
        return fns.reduce( async (acc, fn) =>{
           if(Promise.resolve(acc) === acc){
               return fn(await acc)
           }else{
               return fn(acc)
           }
        }, valor)
    }
}
function gritar(texto){
    return texto.toUpperCase()
}

function enfatizar(texto){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve (`${texto} !!!`)
        }, 3000)
    })
}