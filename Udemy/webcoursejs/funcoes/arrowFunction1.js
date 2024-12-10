let dobro = function (a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a //Return implícito

console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá' // Funçãosem parâmetros
ola = _ => 'Olá' // Pode ser usado desta forma quando não tem parametros

console.log(ola())