/**
 * calculo da hora tecnica
 */

 const read = require('readline-sync')

//ENTRADA 
 let remuneraçãoPret = Number(read.question("Remuneracao pretendida? "))
 let cargaHoraria = Number(read.question("Carga Horaria? "))
 let custoOper = Number(read.question("custo operacional? "))

 //Processamento
 let investimento = remuneraçãoPret * 0.2
 console.log(`valor investido ${investimento}`)
 let reserva = remuneraçãoPret * 0.3
 console.log(`valor investido ${reserva}`)
 let horaTecnica = ((((remuneraçãoPret + reserva) + investimento)+custoOper) / cargaHoraria)
console.log(`o valor da hora tecnica é de ${horaTecnica}`)
