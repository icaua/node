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

if (imc < 17) {
    console.log("Muito abaixo do peso")
  } else if (imc > 17 && imc <= 18.49){
    console.log("Abaixo do peso")
  } else if (imc >= 18.5 && imc <= 24.99){
    console.log("Peso normal")
  } else if (imc >= 25 && imc <= 29.99){
    console.log("Acima do peso")
  } else if (imc >= 30 && imc <= 34.99){
    console.log("Obesidade I")
  } else {
    console.log("Obesidade II")
  }