// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira de praia'
produto['Marca do Produto'] = 'Ruy'
produto.preco = 221

console.log(produto)

delete produto.preco
console.log(produto)
delete produto['Marca do Produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            rua: '',
            cep: ''
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 38,
    }, {
        nome: 'Ana',
        idade: 40
    }]
}

console.log(carro.condutores)

