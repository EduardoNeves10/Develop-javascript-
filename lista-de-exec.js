// ex 01 - calculadora simples
// crie uma função soma que recebe dois números como parâmetro e retorna a soma deles.

function soma(a,b){
    return a + b
}
console.log('A soma é: ',soma(5,9,))

// ex 02 - desconto do produto
// uma loja que aplicar desconto automaticamente. crie uma função calcularDesconto que recebe o preço original de um prooduto e um percentual de desconto, retornando o preço final.

function calcularDesconto (preco, percentual){
    let desconto = percentual / 100 
    return (preco - (preco * desconto))
} 
console.log('O valor final é R$: ',calcularDesconto(700,30))
 

//  ex 03 conversor de temperatura
// crie duas funções:
    // converterCelsiusParaFahrenheit(celsius): recebe um valor em celsius e retorna o equivalente em fahrenheit.
    // converteFahrenheitParaCelsius(fahrenheit): recebe um valor em Fahrenheit e retorna o equivalente em celsius.

function converteCelsiusParaFahrenheit (number){
    return ((number * (9/5)) +32)
}
console.log('Temp em fahrenheit: ',converteCelsiusParaFahrenheit(100),'F')

function converteFahrenheitParaCelsius (numberTwo){
    return ((numberTwo - 32) * (5/9))
}
console.log('Temp em celsius: ',converteFahrenheitParaCelsius(100),'C')



// ex 04 dobro e metade
// crie duas funções:
    // dobro(n): recebe um número e retorna o dobro delete.
    // metade(n): recebe um número e retorna a metade delete.

function dobraValor (a){
    return (a * 2)
}
console.log('O dobro do valor é: ',dobraValor(10))

function metadeValor (b){
    return (b * 2)
}
console.log('A metade do valor é: ', metadeValor(13))


// ex 05 média de notas
// crie uma função calcularMedia que receba trê notas de um aluno e retorne a média.

function calcularMedia(x, y, z) {
    return (x + y + z)/3
}
console.log('A média dos valores: ',calcularMedia(2,3,4))


// ex 06 área de uma circulo
// crie uma função areaCirculo que recebe o raio de um círculo e retorna sua área.

function areaCirculo(raio) {
    const pi = 3.14
    return (pi * (raio ** 2))
}
console.log('A área do circulo é: ', areaCirculo(5))

// ex 07 verificação de múltiplo
// crie uma função ehMultiplo(de, numero) que rretorne true se o número for múltiplo de, e false caso contratrario.

function ehMultiploDe(de, numero){
     verificacao = (numero % de)
    if (verificacao == 0){
        return console.log('true')
    } else {
        return console.log('false')
    }
}
ehMultiploDe(5,125)

// ex 08 par ou ímpar
// crie uma função parOuImpar(n) que recebe um número e retorna 'par' se ele for par e 'ímpar' se ele for impar.

function parOuImpar(numero) {
    for(i = 0; i <= numero; i++){
        if( i % 2 == 0){
            console.log('este número é par', i)
        } else {
            console.log('este número é impar', i)
        }
    }
}
parOuImpar(5)

// ex 09 conversor de moeda
// crie uma função converteRealParaDolar(reais,taxa) que recebe um valor em reais e uma taxa de câmbio fixa e retorna o valor convertido para dólar.

function converteRealParaDolar(reais, taxa) {
    return (reais * taxa)
}
console.log('Valor convertido USD: ',converteRealParaDolar(10, 5.16))

// ex 10 valor final com taxa
// crie uma função calcularValorFinal(valor,taxa) que recebe um valor e uma taxa percentual de serviço e retorna o valot total com a taxa aplicada.

function calcularValorFinal(valor, taxa) {
    return (valor + (valor*(taxa/100)))
}
console.log('o valor total da conta com a taxa de serviço R$: ',calcularValorFinal(320,10))

