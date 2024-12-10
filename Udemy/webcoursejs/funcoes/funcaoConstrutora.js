function Carro(velMax = 200, delta = 5){
    //atributo privado
    let velAtual = 0

    //metodo público
    this.acelerar = function(){
        if (velAtual + delta <= velMax) {
            velAtual += delta
        }else{
            velAtual = velMax
        }
    }
    // metodo publico
    this.getVelAtual = function(){
        return velAtual
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()

console.log(uno.getVelAtual())


const gol = new Carro(250, 30)
gol.acelerar()
gol.acelerar()
console.log(gol.getVelAtual())