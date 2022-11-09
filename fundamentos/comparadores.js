/**
 * comparadores
 */

console.log("comparadores")
console.log(">  | maior que")
console.log(">= | maior ou igual a")
console.log("<  | menor que")
console.log("<= | menor ou igual a")
console.log("== | comparador de igualdade(BUG)")
console.log("===| comparador de igualdade")
console.log("!=  | diferente de(BUG) ")
console.log("!=+  | diferente de ")

//EXEMPLO DE USO DOS COMPARADORES 
let x = 2
console.log(typeof(x))
let Y = "2"
console.log(typeof(Y))

//DEMOSTRAÇÃO DO BUG ==
if (x == Y) {
console.log("igual")

} else{

    console.log("diferente")
}

//DEMOSTRAÇÃO DO BUG !=
if (x != Y) {
    console.log("diferente")
    
    } else{
    
        console.log("igual")
    }