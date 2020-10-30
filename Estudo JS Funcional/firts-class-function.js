//Funções que são tratadas como variáveis. São armazenadas em variáveis

let x = 3 // uma variável

const y = function(txt){
    return `Esse é o texto ${txt}`
} //Firts Class Function

console.log(y('BláBlá'))

//ou arrow function 

const z = () => console.log('ZZZZZZZZ')
console.log(z())