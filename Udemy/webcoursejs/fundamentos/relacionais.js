console.log('01', '1' == 1)
console.log('02', '1' === 1 )
console.log('03', '3' != 3)
console.log('04', '3' !== 3)


const d1 = new Date(0)
const d2 = new Date(0)
console.log('09', d1 === d2)  // Comparando endereços de memória
console.log('10', d1 == d2) // Comparando endereços de memória
console.log('11', d1.getTime() === d2.getTime()) // Comparando os valores adqueridos da variável
console.log('12', undefined == null)
console.log('13', undefined === null)