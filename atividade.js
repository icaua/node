/**
 * atividade 
 */
//chamdo dos modulos 
const read = require('readline-sync');

//IMC
//variaveis 
let peso = Number(read.question("digite o peso: ").replace(",","."))
let altura = Number(read.question("digite a altura: ").replace(",","."))

let imc = peso / (altura * altura)

console.log(`imc: ${imc.toFixed(2)}`)

if (imc < 18.5) {
console.log("abixo do peso ")

} else {
    if 
}


 

