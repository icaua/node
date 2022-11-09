/**
 * exemplo de uso do vetor 
 */

let nipes = ["ouros","copas","espadas","paus"]
let faces = ["Az",2,3,,4,5,6,7,8,9,10,"valete","dama","rei"]

//recuperando a carta az de ouros 
console.log(`carta :${faces[0]} de ${nipes[0]}`)
//recuperando a carta dama de copas 
console.log(`carta :${faces[12]} de ${nipes[1]}`)
//sorteio de uma carta 
//math.random -> gerador de numeros aleatorios
let sorteioNipe = Math.floor(Math.random() * 4)
 console.log(sorteioNipe)
let sorteioface = Math.floor(Math.random() * faces.length)
console.log(sorteioface)
console.log(`Carta sorteada : ${faces[sorteioface]} de ${nipes[sorteioNipe]}`)