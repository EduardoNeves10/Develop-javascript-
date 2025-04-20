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

// ex 11 maior número
// crie uma função maiorNumero(a,b) que recebe dois números e retorna o maior deles.

function maiorNumero(a, b) {
    if ( a > b){
        return console.log('o maior entre eles: ',a)
    } else if ( b > a){
        return console.log('o maior entre eles: ',b)
    } else {
        return console.log('valor invalido')
    }

 }
 maiorNumero(1,2)
 
//  ex 12 idade para votar
// crie uma função podeVotar(idade) que recebe uma idade 'pode votar' se for maior de 18 anos ou mais, e 'não pode votar' caso contrário.

function podeVotar(idade) {
    if (idade >= 18){
        console.log('pode votar')
    } else {
        console.log('não pode votar')
    }
}
podeVotar(19)

// ex 13 daudação personalizada
// crie uma função saudacao(nome) que recebe um nome como parâmetro e retorna uma saudação 'ola, [nome]! Bem-vindo(a)'.

function saudacao(nome) {
    return `Olá, ${nome}! Bem-vindo.`
}
console.log(saudacao('Marcos'))

// ex 14 verificador de acesso
// crie uma função verificarLogin(usuario, senha) que verifica se o usuário e senha inseridos correspondem aos valores 'adim e '1234', retornando'acesso permitido' ou 'acesso negado'.

function verificarLogin(usuario, senha){
    if (usuario === 'adim' && senha === '1234') {
        console.log('Acesso liberado')
    } else {
        console.log('Acesso negado')
    }
}
verificarLogin('adim', '1234')

// ex 15 avaliador de notas
// crie uma função verificarAprovação(nota) que recebe a nota de uma aluno e retorna "aprovado" se for 7 ou mais, "recuperação" se for entre 5 e 6, e 'reprovado' caso contrário.

function verificarAprovação(nota) {
    if (nota == 10) {
        return console.log("excelente")
    } else if (nota >= 7 ){
        return console.log('aprovado')
    } else if (nota > 4 ){
        return console.log('recuperação')
    } else {
        return console.log ('reprovado')
    }
}
verificarAprovação(10)

// ex 16 calculador de frete
// crie uma função calcularFrete(valorCompra) que verifica se uma compra tem frete grátis para valores acima de R$100.

function calcularFrete(valorCompra) {
    if (valorCompra >= 100){
        return console.log('Frete grátis')
    } else{
        return console.log('Adicione mais itens para frete grátis')
    }
}
calcularFrete(100)

// ex 17 classificação de idade
// crie uma função classificarIdadde(idade)que retorna se uma pessoa é 'criança' (até 12 anos), 'adolescente'(13 a 17 anos), 'adulto'(18 a 59 anos) ou 'idoso' (60 anos ou mais).

function classificarIdadde(idade) {
    if (idade >= 60) {
        return console.log('Idoso')
    } else if (18 > idade < 59 ) {
        return console.log('Adulto')
    } else if (13 > idade < 17 ) {
        return console.log('Adolescente')
    } else if (idade <= 12 ) {
        return console.log('Criança')
    }
}
classificarIdadde(60)

// ex 18 triângulo válido
// crie uma função podeSerTriangulo(a, b, c) que recebe três lados e retorna 'forma um triângulo à condição matemática de existência de um triângulo.

function podeSerTriangulo(a, b, c) {
    if ( a < b + c && b < a + c && c < b + a) {
        return console.log('Forma um triângulo')
    } else {
        return console.log('Não forma uma triângulo')
    }
}
podeSerTriangulo(15 , 9, 10)

// ex sistema de desconto progressivo
// crie uma função calcularDescontoProgressivo(valor) que retorne o preço final com desconto:
// 20% para valores a partir de R$500
// 15% para valores entre R$300 e R$499
// 10% para valores abaixo R$300

function calcularDescontoProgressivo(valor) {
    let des20 = 20 / 100 || 0.2
    let des15 = 15 / 100 || 0.15
    let des10 = 10 / 100 || 0.1
    let a = valor - (valor * des20) 
    let b = valor - (valor * des15)
    let c = valor - (valor * des10)

    if (valor >= 500)  {
        return console.log('Desconto de 20%, valor total R$:', a )
    } else if (valor >= 300){
        return console.log('Desconto de 15%, valor total R$: ', b)
    } else if (valor < 300){
        return console.log('Desconto de 10%, valor total R$: ', c)
    } else {
        return console.log('Compra mais para obter Desconto')
    }
}
calcularDescontoProgressivo(299)

// ex 20 verificação de dias da semana
// crie uma função diaUtil(dia) que recebe um dia da semana e retorna 'fim de semana' se for sábadado ou domingo, e 'dia útil' caaso contrário.

function diaUtil(dia) {
    if (dia == 'segunda') {
        return console.log(`dia util ${dia}`)
    } else if (dia == 'terça'){
        return console.log(`dia util ${dia}`)
    } else if (dia == 'quarta'){
        return console.log(`dia util ${dia}`)
    } else if (dia == 'quinta'){
        return console.log(`dia util ${dia}`)
    } else if (dia == 'sexta'){
        return console.log(`dia util ${dia}`)
    } else if (dia == 'sabado'){
        return console.log(`fim de semana ${dia}`)
    } else if (dia == 'domingo'){
        return console.log(`fim de semana ${dia}`)
    } else {
        return console.log(`em que dia voce está ? ${dia}`)
    }
}
diaUtil('domingo')

// ex 21 índice de massa corporal (imc)
// crie uma função calcularImc(peso, altura) que recebe peso e altura e retorna o índice de massa corporal (imc)

function calcularImc(peso, altura) {
    let formula
    formula = (peso / (altura * altura))
        if (18.5 <= formula){
            return console.log(`magreza ${formula}`)
        } else if (18.6 >formula< 24.9){
            return console.log(`normal ${formula}`)
        } else if (25 >formula< 29.9){
            return console.log(`sobrepeso ${formula}`)
        } else if (30 >formula< 34.9){
            return console.log(`obesidade grau 1 ${formula}`)
        } else if (35 > formula < 39.9){
            return console.log(`obesidade grau 2 ${formula}`)
        } else if (formula > 40){
            return console.log(`obesidade grau 3 ${formula}`)
        } else {
            return console.log(`inserir outros dados`)
        }
}
calcularImc(30, 1.80)