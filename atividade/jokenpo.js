/**
 * desenvolver com node JS e node no modo console o jogo pedra papel tesoura
 */
const read = require('readline-sync')
//ENTRADA
console.log("____________jokenpô____________")
console.log("1. pedra")
console.log("2.papel")
console.log("3.tesoura")
console.log("")
let player = Number(read.question("selecione o valor desejado: "))

let maquina = Math.floor(Math.random() * 3 + 1)

switch (player) {
case 1:
        console.log("jogador escolheu pedra")
break
case 2:
        console.log("jogador escolheu papel")
break
case 3:
        console.log("jogador escolheu tesoura")
break

default : 
    console.log("opção invalida")
break
}
switch (maquina) {
    case 1:
        console.log("maquina escolheu pedra")
    break

    case 2:
        console.log("maquina escolheu papel")
    break

    case 3:
        console.log("maquina escolheu tesoura")
    break
}
if (player == maquina) {
    console.log("Deu empate")
} else if ((player == 1 & maquina == 3 )|| (player == 2 & maquina == 1) || (player == 3 & maquina == 2)){
    console.log("Jogador venceu")
} else { 
    console.log("Computador venceu")
}

