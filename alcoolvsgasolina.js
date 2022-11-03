/**
 * alcool vs gasolina
 */

//MODULOS
const read = require('readline-sync')

//ENTRADAS 
let valora = Number(read.question("valor do alcool? "))
let valorg = Number(read.question("valor da gasolina? "))

//PROCESSAMENTO
let cal = valora / valorg
console.log(cal)
//SAIDA 
if (cal < 0.71) {

    console.log("vai de alcool")
} else { 

    console.log("vai de gasolina")
}

