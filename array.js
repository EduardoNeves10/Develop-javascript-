const fruit = ['maça', 'uva', 'laranja']
// [] = vetor

console.log(fruit) // [ 'maça', 'uva', 'laranja' ]
console.table(fruit) // 
// ┌─────────┬───────────┐
// │ (index) │ Values    │
// ├─────────┼───────────┤
// │ 0       │ 'maça'    │
// │ 1       │ 'uva'     │
// │ 2       │ 'laranja' │
// └─────────┴───────────┘

console.log(fruit.length) // 3 //conta os itens

console.log(fruit[0]) // maça
console.log(fruit[1]) // uva
console.log(fruit[2]) // laranja

// criar array de numeros 0 a 10
// [] = vetor
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const fullName = 'Maria jose dos santos'
let arrayName = fullName.length // metódo para conta uma string
console.log(arrayName) //21

const fullnam = 'Maria jose dos santos'
let arrayNam = fullnam.split(' ') // metódo para fatiar um nome
console.log(arrayNam) // [ 'Maria', 'jose', 'dos', 'santos' ]

console.log(arrayNam.length)
console.table(arrayNam)
console.log(arrayNam[0])

console.log(`olá, ${arrayNam[0]} ${arrayNam[2]} ${arrayNam [3]}`)
