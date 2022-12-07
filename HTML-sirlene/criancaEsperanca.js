/**
 * 3. Faça um programa CRIANÇA ESPERANÇA - 
 * onde o doador possa escolha o valor da doação e imprima o valor da doação e agradecimentos pela doação.
[1] para doar R$ 10,00
[2] para doar R$ 25,00
[3] para doar R$ 50,00
[4] para doar outros valores
[5] para cancelar
 */

//modulos 
const read = require('readline-sync')

//entrada
console.log("Criança esperança para doar digite")
console.log("[1] para doar R$ 10,00")
console.log("[2] para doar R$ 25,00")
console.log("[3] para doar R$ 50,00")
console.log("[4] para doar outros valores")
console.log("[5] para cancelar")
let opcao = Number(read.question("Digite aqui o opcao selecionada : ").replace(",","."))
doacao = 0
switch (opcao) {

    case 1:
     doacao = 10
break
    case 2:
    doacao = 25
break
    case 3:
    doacao = 50
break
    case 4:
    doacao = Number(read.question("digite o valor desejado :  ").replace(",","."))
break
case 5:
    doacao = 0
}

if (doacao == 0){
    console.log("Agradecemos seu contato")
} else {
console.log(`Agradecemos sua doação no valor de R$${doacao}`)
}