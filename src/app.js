const express = require('express')
const app = express()
const port = 3000
    //Importação do controller
const funcionario = require('./controller/funcionarios-controller')
    //Importação do SQLite
const db = require('./infra-db/sqlite-db')

//----------------------------------------------------------------------------------//

//Middlewares
app.use(express.json())

//Rotas Funcionarios
funcionario(app, db)

// Verificação do funcionamento do servidor na porta declarada
app.listen(port, () => {
    console.log(`Servidor rodando: http://localhost:${port}/`)
})