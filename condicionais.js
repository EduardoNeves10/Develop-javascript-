// if funciona com sistema de hierarquia da maior para o menor

let nota = 6

if(nota >= 10){
    return console.log('excelente')
} else if (nota >= 7){
    return console.log('aprovado')
} else if (nota >= 5) {
    return console.log('estudar_mais')
} else if (nota === 4) {
    return console.log('recupeção')
} else {
    return console.log('reprovado')
}
