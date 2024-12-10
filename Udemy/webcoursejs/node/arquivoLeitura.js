const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono - travando eventloop
const conteudo = fs.readFileSync(caminho, 'utf-8')

//console.log(conteudo)

// assincrona

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port} - Senha: ${config.db.pass}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})