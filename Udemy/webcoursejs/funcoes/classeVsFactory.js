class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}


const P1 = new Pessoa ('Pedro')
//const P1 = new Pessoa ()
P1.nome = 'Pedro'
P1.falar()

const criarPessoa = nome => {
    return{
        falar: ()  => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()
