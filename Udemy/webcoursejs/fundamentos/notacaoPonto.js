console.log(Math.ceil(6.1)) //Utilizando contacao ponto para função Math

const obj1 = {} //Criando objeto
obj1.nome = 'Bola'  // Criando um elemento para objeto após criação do objeto

console.log(obj1)
console.log(obj1.nome)

function Obj (nome){
    this.nome = nome
    this.exec = function(){
        console.log(this.nome)
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()