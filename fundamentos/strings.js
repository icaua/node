/**
 * strings
 */

const professor ="isaac caua mourão da silva"
//indice          01234

console.log(typeof(professor))
console.log(professor)
//obtendo o valor do caractere da string
console.log(professor.charAt(3))
//para obter o valor do indice de uma string
console.log(professor.indexOf("a"))
//ooter uma sequencia a partir do indice
console.log(professor.substring(6))
//é possilve alterar o conteudo da string
console.log(professor.replace("isaac","uatizap" ))//original 
//dica replace(",",".")

/**
 * concatenar
 */

const x = 2
const y = Number("3z")
console.log(typeof(y))
//evitar o uso do + na concatenação 
console.log("valor de x:" + x)
console.log("2" + 2)// concatena
console.log("4"- x)//subtrai ( o mesmo vale para * e \)
console.log("professor " + professor)
//para concatenar usar crase `` 
console.log(`professor ${professor}`)
