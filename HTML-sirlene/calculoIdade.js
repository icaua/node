/**
 * Faça um programa que receba o ano de nascimento de uma pessoa e o ano atual.
Calcule e imprima:
a. A idade dessa pessoa
b. Essa idade convertida em semana
 */

//modulos
const read = require('readline-sync')

//entrada
let anoNascimento = Number(read.question("digite o ano do nascimento :  ").replace(",","."))

//processamento
let idade = 2022 - anoNascimento
let semana = idade * 52.143

//saida
console.log(`sua idade é de ${idade} anos`)
console.log(`sua idade em semanas é de ${semana}`)


