function getInteiroAleatorioentre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0 
let qtd = 0

do {
    opcao = getInteiroAleatorioentre(-1, 10)
    qtd++
    //console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1 && qtd < 10 ) 
console.log(qtd)
console.log('Até a próxima')
