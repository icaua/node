/**
 * ponto de venda
 */
//modulos
 const read = require('readline-sync')

 //ENTRADA
 let total = Number(read.question("valor total da compra ?"))
 let valordesconto = Number(read.question("desconto em % ?"))

 //processamento
 let totaldesconto = total - ((valordesconto * total) / 100)
 console.log(`valor da compra ${totaldesconto}`)

 //saida 
 let valorpago = Number(read.question("valor pago "))
 let troco = valorpago - totaldesconto
 console.log(`troco ${troco}`)
