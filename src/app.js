const express = require('express')
const app = express()
const cors = require('cors')


//Importação do controller
const funcionario = require('./controller/funcionarios-controller')
    //Importação do SQLite
const db = require('./infra-db/sqlite-db')

//----------------------------------------------------------------------------------//

//Middlewares
app.use(express.json())
app.use(cors())

//Rotas Funcionarios
funcionario(app, db)
app.get('/', (req, res) => {
    res.send("API rodando.")
})

module.exports = app