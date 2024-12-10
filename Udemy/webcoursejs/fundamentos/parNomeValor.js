// par nome/valor
const saudacao = 'Opa' //contexto léxico
function exec(){    //contexto lexixo 2
    const saudacao = 'Falaa'
    return saudacao
}
// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        lgradouro: 'Rua tal',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)