/**
 * calculo da media de duas notas
 */

//importar pacote 
const read = require('readline-sync');
const color = require('colors')

//variaveis 
console.log("===== calculo da media =====")
let nome = read.question("digite seu nome:")
console.log(`aluno:${nome}`)
let nota1 = Number(read.question("digite a nota 1: ").replace(",","."))
let nota2 = Number(read.question("digite a nota 2: ").replace(",","."))

//processamento 
let media = (nota1 + nota2) / 2
// saida 
console.log(`media:${media.toFixed(1)}`)
//status
if (media < 5) {
console.log("aluno reprovado".red)
}else{
    console.log("aluno aprovado".blue)
}