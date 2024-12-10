function compras( t1, t2){
    const sorvete = t1 || t2
    const tv50  = t1 && t2
    const tv32  = t1 != t2
    const Saudavel  = !sorvete
    return{ sorvete, tv50, tv32, Saudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
