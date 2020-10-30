//é uma função que une arrays de níveis diferentes (vários arrays dentro de um maior) .flat()

const letras = ['O', 'l', 'á', 
' ', 
'M', 'u', 'n', 'd', 'o', 
'!', ]

const resultado = letras.map(l => l.toUpperCase()).reduce((a, b) => a + b)// com numeros somar, com letras concatena
console.log(resultado)


//agora, e se o array letras tivesse, dentro de si, alguns arrays separados?
const letras2 = ['O', ['l'], 'á', 
' ', 
'M', ['u', 'n', 'd'], 'o', 
['!'], ]

const resultado2 = letras.flat(Infinity) // o valor que fica dentro do .flat(..) é quantos níveis ele vai juntar
const resultadoFinal = resultado2.map(t => t.toUpperCase()).reduce((a, b) => a + b)
console.log(resultadoFinal)
