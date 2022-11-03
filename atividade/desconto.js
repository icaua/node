/**
 * calculo de desconto
 */

//MODULOS
const read = require('readline-sync')
//ENTRADA 
let avista = Number(read.question("valor do produto ? R$").replace(",","."))
let desconto = Number(read.question("qual o desconto em %? ").replace(",","."))
//processamento
let valorfinal = avista - ((desconto * avista) / 100)
//saida 
console.log(`valor a pagar R$${valorfinal} `)
