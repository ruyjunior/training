// usando a notção literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto (nome, preco, desconto ) { 
       this.nome = nome
       this.getPrecoComDesconto = () => {
            return preco * (1 - desconto)
       }
}

const p1 = new Produto ('Caneta', 7.99, 0.15)
const p2 = new Produto ('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getDia(){
            return salarioBase / 30
        }, 
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('João' , 7980 , 4)
const f2 = criarFuncionario('Maria' , 11400 , 1)
console.log('Salario Bruto: ', f1.salarioBase,
'. Salario com desconto de faltas: ', f1.getSalario(),
'. Faltas do mês: ', f1.faltas,
'. Valor do Dia: ', f1.getDia()
)


// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


// Uma função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)

