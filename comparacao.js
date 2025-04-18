// comparação igualdade 
// == || ===

let igual 
let string = '5'
let number = 5

igual = (string == number) // true
console.log(igual, 'igualdade')

igual = (string === number) // false
console.log(igual, 'igualdade estrita') // verifica a igualdade de tipagem

// comparação desingualdade != || !== || diferente
let diferente
let stringTwo = '10'
let numberTwo = 10

diferente = (stringTwo != numberTwo)
console.log(diferente, 'diferente') // false
// compara os valores e faz conversão de tipagem

diferente = (stringTwo !== numberTwo)
console.log(diferente, 'diferente estrita') // true
// compara o valor e não faz conversão de tipagem


let maior = (10 > 5)
let menor = (7 < 3)
let maiorIgual = (5 >= 5)
let menorIgual = (10 <= 8)

console.log('10 > 5',maior) // true
console.log('7 < 3',menor) // false
console.log('5 >= 5',maiorIgual) // true
console.log('10 <= 8',menorIgual) // false

