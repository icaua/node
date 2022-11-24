
const read = require('readline-sync')

let produto = Number(read.question("valor em R$"))
let conversão = produto / 5.3600
console.log(`valor em dolar R$${conversão.toFixed(2)}`)

let imposto = (conversão * 0.3) + conversão
console.log(`valor com imposto R$${imposto.toFixed(2)}`)

