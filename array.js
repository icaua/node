/**
 * array - vetor estudo do vetor 
 */

//para criar um vetor basta abrir colchetes 
//              [0]            [1]            [2]         [3]
let  times = ["curintias" , "palmeiras" , "sao paulo" , "santos"]
console.log(times)
// no javascrip um vetor é heterogêneo e dinamico 
console.log(typeof(times))
// para saber o tamanho do vetor
console.log(times.length)
//recuperar o indice de um vetor
console.log(times.indexOf("moto clube timon"))
//recuperar um valor do vetor 
console.log(times[2])
console.log(times[5])
//adicionando um valor ao vetor 
times[5] = "flamengo"
console.log(times)
console.log(times[5])
//adicionado multiplos itens ao vetor
times.push("cruzeiro","sport recife","paysandu","moto clube timon")
console.log(times)
console.log(times.length)
console.log(times.indexOf("moto clube timon"))
// adicionando item de tipos diferentes ao vetor 
times.push(1977,null,"bragantino",true)
console.log(times)
//removendo um item do especifico vetor 
delete times[2]
console.log(times)
//removendo o ultimo  item do vetor
times.pop()
console.log(times)