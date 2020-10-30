const path = require('path')
const fn = require('./funções')

const caminho = path.join(__dirname, '..', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')'
]

fn.lerDiretorio(caminho)
    //.then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
    .then(fn.elementosTerminadosCom('.srt'))
    //.then(arquivosSRT => fn.lerArquivos(arquivosSRT))
    .then(fn.lerArquivos)
    .then(fn.mesclarConteudos) //não vai mais exibir o .then anterior em um array, mas sim num conteúdo só
    .then(fn.separarTextoPor('\n')) //vai pegar o .join e transformar em um array, porém separando as linhas
    //.then(linhas => fn.removerElementosSeVazio(linhas))
    .then(fn.removerElementosSeVazio) //jeito refatorado
    //.then(linhas => fn.removerElementosSeIncluir(linhas, '-->')) //nos parâmetro, colocar o array como o 1° e o 'padrao' como o 2°
    .then(fn.removerElementosSeIncluir('-->'))
    //.then(linhas => fn.removerElementosSeApenasNumeros(linhas)) //função que vai remover toda linha com apenas números
    .then(fn.removerElementosSeApenasNumeros) //jeito refatorado
    .then(fn.removerSimbolos(simbolos))
    .then(fn.mesclarConteudos)
    .then(fn.separarTextoPor(' '))
    .then(fn.removerElementosSeVazio)
    .then(fn.removerElementosSeApenasNumeros)
    .then(fn.agruparPalavras) // vai contar quantas palavras são iguais, agrupando-as 
    .then(fn.ordenarPorAtriNumerico('qtde', 'desc'))
    .then(console.log)