/**
 * calculo  idade
 */
//MODULOS
const read = require('readline-sync')

//ENTRADA
let idade = Number(read.question("qual sua idade ? "))

//saida 

if (idade > 18) {

    console.log("menor de idade ")
} else if (idade > 17) {

    console.log("maior de idade")
}