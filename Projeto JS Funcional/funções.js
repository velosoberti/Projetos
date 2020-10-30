const fs = require('fs')
const path = require('path')

function lerDiretorio(caminho){
    return new Promise((resolve, reject) => {
        try{
            let arquivos = fs.readdirSync(caminho)
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos)
        } catch(e){
            reject(e)
        }
    })
    
}

function lerArquivo(caminho){
    return new Promise((resolve, reject) => {
        try{
            const conteudo = fs.readFileSync(caminho, {encoding: 'utf-8'})
            resolve(conteudo.toString())
        } catch(e){
            reject(e)
        }
    })
}

function lerArquivos(caminhos){
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function elementosTerminadosCom (padrao){
    return function(array){
        return array.filter(el => el.endsWith(padrao))
    }
}

function mesclarConteudos(array) {
    return array.join(' ')
}

function separarTextoPor(simbolo){
    return function(texto){
        return texto.split(simbolo)
    }
}

function removerElementosSeVazio(array){
    return array.filter(el => el.trim()) //método 'trim' serve para eliminação de linhas vazias, não necessário colocar uma negação antes
}

function removerElementosSeIncluir(padrao){
    return function(array){ //Assim n é necesário passar o array como parâmetro da função pai
        return array.filter(el => !el.includes(padrao)) //caso o 'padrao' exista, ele vai manter. Caso não ele irá excluir    
    }
}

function removerElementosSeApenasNumeros(array){  
    return array.filter(el => {
        const num = parseInt(el.trim()) //o parseInt retorna o valor NaN (NOT A NUMBER), caso o num seja !== de num, vai retornar um string, senão retorna um NaN
        return num !== num 
    })
}

function removerSimbolos(simbolos){ //essa função vai mapear o array procurando os simbolos e retornar um novo sem os simbolos (isso o split faz) e depois juntando tudo com o 'join'
    return function (array){
        return array.map(el => {
            let novoTexto = el
            simbolos.forEach(simbolo => {
                novoTexto = novoTexto.split(simbolo).join('')
            })
        return novoTexto    
        })
    }
}

function agruparPalavras(palavras){ //palavras é o array
    return Object.values(palavras.reduce((acc, palavra) => { //colocar dentro do Object.Values faz com que retorne só o objeto
        const el = palavra.toLowerCase() //palavra é o novo objeto criado e aqui deixa tudo minusculo
        const qtde = acc[el] ? acc[el].qtde + 1 : 1 //se o [el] existir, ele vai pegar a qtde atual ('?' faz isso) e somar +1 ou senão (':' é o senão) retorna só 1
        acc[el] = {elemento: el, qtde}
        return acc 
    }, {}))
}

function ordenarPorAtriNumerico(attr, ordem ='asc'){
    return function (array){
        const asc = (o1, o2) => o1[attr] - o2[attr] //essa é a lógica de separar de forma ascendente
        const desc = (o1, o2) => o2[attr] - o1[attr] //essa é a lógica de separar de forma descendente
        return array.sort(ordem === 'asc' ? asc : desc) // se ordem for igual asc, vai pegar o asc(), senão vai pegar o desc()
    }
}

module.exports = {
    lerDiretorio, 
    lerArquivos,
    mesclarConteudos,
    separarTextoPor,
    removerElementosSeVazio,
    removerElementosSeIncluir,
    removerElementosSeApenasNumeros,
    removerSimbolos,
    elementosTerminadosCom,
    agruparPalavras,
    ordenarPorAtriNumerico
}