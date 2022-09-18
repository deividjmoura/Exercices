/*let num = [1, 2, 3]
num[5] = 5 // para colocar no local específico
num.push(4) // para adcionar ao final
num.length // não é um método e sim um atributo --->> para saber o comprimento da array
num.sort() // coloca todos os item de forma crescente
console.log(`O array possui ${num.length} posições`)
console.log(`O array possui a ${num[3]}° posição`)
console.log(num[0]) */
let valores = [ 0, 1, 2, 3, ]


for(let pos=0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}