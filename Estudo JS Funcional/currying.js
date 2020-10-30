function soma (a){
    return function (b){
        return function (c){
            return a + b + c
        }
    }
} // isso é currying: ao invés deu passar todos os parâmetros já na primeira função, eu vou criando outras para chamar outros parms

//monstrando o ganho de flexibilidade
//esse exemplo não tem o currying, impossibilitando que a função seja usada de forma flexivel 
function textoComTamanhoEntre2(min, max, error, texto){
    const tamanho = (texto || '').trim().length
    if(tamanho < min || tamanho > max){
        throw error
    }
}
const p2 = {nome: 'A', preco: 14.90, desc: 0.25}
textoComTamanhoEntre2(4, 255, 'Produto Inválido', p2.nome) 

//
function textoComTamanhoEntre(min){
    return function(max){
        return function(error){
            return function(texto){ //o mais volátil tem de ficar em último 
                const tamanho = (texto || '').trim().length
                if(tamanho < min || tamanho > max){
                    throw error
            
                }
            }
        }
    }

}

const forcarTamanho = textoComTamanhoEntre(4)(255) //essa é a vantagem do currying... você pode criar funções intermediárias
const erroDaFuncao =  forcarTamanho('Produto Inválido') //facilitando sua chamada ou impedindo a mutabilidade fácil dos valores

const p1 = {nome: 'Abcs', preco: 14.90, desc: 0.25}
erroDaFuncao(p1.nome) 