/**
 * porcentagem 
 */

 const read = require('readline-sync')
//ENTRADA
 let num = Number(read.question("digite o valor?"))
 let valorporcentagem = Number(read.question("qual porcentagem do valor deseja calcular?"))

//PROCESSAMENTO
let calculo = (num * valorporcentagem) / 100

//saida 
console.log(`${valorporcentagem} % de ${num} = ${calculo}`)
