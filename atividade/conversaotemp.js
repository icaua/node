/**
 * conversão de temperatura celsius para fahrenheit
 */

//MODULOS
 const read = require('readline-sync')

//ENTRADA 
let temperatura = Number(read.question("qual a tempera em grau celsius ").replace(",","."))

//processamento 
let conversor = temperatura * 1.8 + 32

//saida 
console.log(conversor)