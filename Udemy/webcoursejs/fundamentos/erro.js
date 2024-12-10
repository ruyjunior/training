function tratar(erro){
    throw 'Erro'
}
function impNome (obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!' )
    } catch (e) {
        tratar(e)
    } finally {
        console.log ('final')
    }
}

const obj = {nome: 'Roberto'}
impNome(obj)s