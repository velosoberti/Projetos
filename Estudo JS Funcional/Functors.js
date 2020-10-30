//é um objeto (como se fosse um container) que guarda valores e implementa a função MAP


function TipoValor(valor){
    return{
        valor,
        invalido(){
            return this.valor === null || this.valor === undefined
        },
        map(fn){
            if(this.invalido()){
                return TipoValor(null)
            }else{
                const novoValor = fn(this.valor)
                return TipoValor(novoValor)
            }
        }
    }
}

const resultado = TipoValor('This is a text')
    .map(t => t.toUpperCase())
    .map(t => `${t}!!!`)

console.log(resultado.valor)