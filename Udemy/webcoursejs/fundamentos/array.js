const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)

console.log(valores.length) // Retorna o tamanho do array
valores.push({id: 3}, false, null, 'teste') //insere itens ao array
console.log(valores)
console.log(valores.pop()) //retira o último elemento
delete valores[0]   //Apaga o item de index fornecido
console.log(valores)
console.log(typeof valores) //mostra o tipo da variavel

