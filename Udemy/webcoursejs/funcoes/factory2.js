function criarProduto (nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1 * preco
    }
}

console.log(criarProduto('Notebook', 2119.49))
console.log(criarProduto('iPad', 1199.49))