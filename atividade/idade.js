/**
 * calculo  idade
 */
//MODULOS
const read = require('readline-sync')
//ENTRADA
let idade = Number(read.question("qual sua idade ? ").replace(",","."))
//saida 
if (idade < 16) {
    console.log("proibido votar")
} else if (idade > 17 && idade < 71) {
    console.log("voto obrigatorio ")
} else { 
    console.log("voto facultativo")
}