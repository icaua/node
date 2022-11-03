/**
 * calculo de desconto
 */

//MODULOS
const read = require('readline-sync')

console.log("========== custo x venda =======")
//ENTRADA 
let custo = Number(read.question("preco de custo ? R$").replace(",","."))
let lucro = Number(read.question("qual o lucro pretendido em % ? "))
//processamento
let venda = custo + ((lucro * custo) / 100)
//saida 
console.log(`valor a pagar R$${venda.toFixed(2)} `)
