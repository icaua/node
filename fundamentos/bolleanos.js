/**
 * Estudo das variaveis do tipo  booleanas
 */

let sw = false
let lamp = true
console.log("======variavel sw======")
console.log(typeof(sw))
console .log(sw)
console.log("=====variavel lamp=======")
console.log(typeof(lamp))
console .log(lamp)

//No js é possivel usar 0 ou 1 como booleano 
sw = !!1 //(!0 !1 !!0 !!1)
console.log(typeof(sw))
console.log(sw)
//dica ! é possivel usar o booleano como como uma estrutura de controle condicional 
console.log(sw || "Lampada apagada ")