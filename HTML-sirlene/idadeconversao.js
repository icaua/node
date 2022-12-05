/**
 * Faça um programa que receba a idade de uma pessoa em anos e imprima essa idade em: Meses, Dias, Horas, Minutos.
 */

//modulos
const read = require('readline-sync')

//entrada
let idade = Number(read.question("digite sua idade : ").replace(",","."))

//processamento 
let meses = idade * 12
let dias = idade * 365
let horas = idade * 8760
let minutos = idade * 525600

//saida
console.log(`sua idade em meses ${meses}`)
console.log(`sua idade em dias ${dias}`)
console.log(`sua idade em horas ${horas}`)
console.log(`sua idade em minutos ${minutos}`)
