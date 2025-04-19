// // laço de repetição
// for(i = 0; i < 10; i++){ //(inicialização, condição, incremento)
//     console.log(i)
// }

// // laço de repetição
// for(i = 0; i < 10; i = i + 1){
//     console.log(i)
// }

// // laço de repetição com limite e função
// function contagem(limite) {
//     for(i = 0; i <= limite; i++){
//         if(i % 2 === 0){
//             console.log('este número é par', i)
//         } else {
//             console.log('este número é impar', i)
//         }
//     }
// }
// contagem (10)

// // somar os valores impares dentro de uma contagem 

// function contagem(limite) {
//     let somaPares = 0
//     let somaImpar = 0
//         for ( i = 0; i <= limite; i++){
//             if(i % 2 === 0){
//                 somaPares += i //soma 0 + 2 + 4 = 6
//             } else {
//                 somaImpar += i // soma 1 + 3 + 5 = 9
//             }
//         }
//         return `a soma pares é ${somaPares}, e as dos impares ${somaImpar}`
// }
// console.log(contagem(5))

// // loop para encontra número
// for (i = 0; i < 100; i++){
//     console.log(i)
//         if (i == 27) { // o contador para quando encontra o número 27 e exibe a mens. abaixo
//             return console.log('encontrei o número 27')
//         }
// }


// tabuada
function tabuada(numero) {
    for (index = 0; index <= 10; index++) {
        console.log(`${numero} x ${index} = ${numero*index}`)
    }
}
tabuada(2)

// numero regressão
function regressao(number) {
    for ( i = number; i >= 0; i--) {
        if (i === 0){
            console.log('feliz natal')
        }
        console.log(i)
    }
}
regressao(5)

// contagem regressiva
function contagemRegressiva(value) {
    for (let i = value; i >= 0; i--){
        setTimeout(() => {
            if (i == 0){
                return console.log('feliz natal')
            }
            console.log(i)
        }, (value - i)*1000)
    }
}
contagemRegressiva (10)