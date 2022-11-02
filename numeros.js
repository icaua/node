/**
 * numeros 
 */


const peso = 62.0 //, gera um bug 
const altura = 1.75

console.log(typeof(peso))
console.log(typeof(altura))
//dica para saber se um numero é inteiro ou não 
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))

const imc = peso / (altura * altura)
console.log(`IMC : ${imc.toFixed(2)}`)// to fixed (x) determina o numero de casas decimais 

//ATENÇÃO
console.log(10/0)
console.log("10"/"m")//NaN: not a number
console.log(0.2 + 0.3)

