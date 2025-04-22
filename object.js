const webSite = {
    name: 'code trouble',
    since: '2024',
    descricao: 'site de dev para dev.',
}
console.log(webSite.name)

const client = {
    name: 'Robson',
    e_mail: 'robson@gmail.com',
    cpf: '722.582.901-23',
    phone:'(55) 8722-3940',
    age:'24',
    yearbirthday: '2001'
}
console.log(client.phone)

client.phone = '(11) 99556-9018'
console.log(client.phone) // phone passa a ser esse

client.e_mail = 'senai@senai.com.br'
console.log(client.e_mail) //e-mail passa a ser esse

function saudacao(name) {
    return `olá, ${name}`
}
console.log(saudacao('Eduardo'))
console.log(saudacao(client.name)) // retorna o nome do do object

function idade(num) {
    return `Sua idade é, ${num} anos`
}
console.log(idade(client.age))

function saudacao(name, num) {
    return `olá, ${name} sua idade é: ${num}`
}
console.log(saudacao(client.name, client.age)) // buscando informações do banco de dados object


// função tradicional
const soma = function(a, b) {
    return console.log(a + b)
}
soma(5,3);

// função anônima (arrow function)
let myFunction = (a, b) => 
    console.log(a * b)
myFunction(2,15)

// função anônima =>
const getNumbe = () =>
    console.log(`Eu`) 
getNumbe()

// exemplo 01
const getNumber = (name) =>
    console.log(`seu nome é ${name}`)
getNumber('leo')

// exemplo 02 sem chaves
const getNum = () =>
    console.log(`olá mundo`)
getNum()

// exemplo 02 com chaves
const getN = () => {
    console.log(`olá mundo`)
}
getN()

// // exemplo 03, posso não usar chaves
// setTimeout(() => 
//     console.log(`será exibido após três segundos`)
// , 3000)

// // exemplo 03, posso usar chaves
// setTimeout(() => {
//     console.log(`será exibido após três segundos`)
// }, 3000)

// exe
const handleCorrecAge = (name, yearbirthday) => {
    let result = 2025 - yearbirthday
    return `ola, ${name} você está com ${result} anos de idade`
}
console.log(handleCorrecAge(client.name, client.yearbirthday))

// exe data dinâmica
const handleCorrecAg = (name, yearbirthday) => {
    let date = new Date
    let result = date.getFullYear() - yearbirthday
    return `olá, ${name}, sua idade é: ${result}`
}
console.log(handleCorrecAg(client.name, client.yearbirthday))

// desestruturação do objeto
const product = {
    name: 'Tv sansung 42',
    category: 'Eletronic',
    price: '1669,99',
    feedback: [
        {
            clientName: 'Marilza',
            message: 'Entrega rápida e funcional' 
        },
        {
            clientName: 'Paulo',
            message: 'Pessimo produto, não compensa'
        }
    ]
}
console.log(product.name) // não usual

// desestruturação do objeto
const {price} = product
console.log(price)
const {name} = product
console.log(name)
