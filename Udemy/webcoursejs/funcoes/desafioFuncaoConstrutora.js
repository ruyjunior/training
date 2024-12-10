function Pessoa (nome) {
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}


const P1 = new Pessoa ('Pedro')
//const P1 = new Pessoa ()
P1.nome = 'Pedro'
P1.falar()

    