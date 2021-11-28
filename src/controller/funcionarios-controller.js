const Funcionario = require('../model/funcionarios-model')
const FuncionarioDAO = require('../DAO/funcionariosDAO')

const funcionario = (app, db) => {
    const contratadoDAO = new FuncionarioDAO(db)

    //CREATE FUNCIONARIO
    app.post('/funcionarios', async(req, res) => {
        try {
            const contratado = new Funcionario(req.body.nomeCompleto, req.body.email, req.body.telefone, req.body.endereco, req.body.rg, req.body.cpf, req.body.dataDeNascimento, req.body.cargo, req.body.turno, req.body.setor, req.body.remuneracao)
            const insereFunc = await contratadoDAO.novoFuncionario(contratado)
            res.json(insereFunc)

        } catch (error) {
            res.status(400).json({
                "message": error.message,
                "error": true
            })
        }
    })

    // READ - BUSCAR FUNCIONARIO
    app.get('/funcionarios/:id', async(req, res) => {
        const id = req.params.id
        try {
            const funcID = await contratadoDAO.buscaFuncionario(id)
            res.json(funcID)
        } catch (error) {
            res.status(400).json({
                "message": error.message,
                "error": true
            })
        }
    })

    // READ - LISTAR TODOS OS EMPREGADOS 
    app.get('/funcionarios', async(req, res) => {
        try {
            const funcDAO = await contratadoDAO.buscaFuncionarioAll()
            res.json(funcDAO)

        } catch (error) {
            res.status(400).json({
                "message": error.message,
                "error": true
            })
        }
    })

    // UPDATE - ATUALIZA FUNCIONARIO
    app.patch('/funcionarios:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
        try {
            FuncionarioDAO.atualizaFuncionario(id, valores, res)
        } catch (error) {
            res.status(400).json({
                "message": error.message,
                "error": true
            })
        }
    })

    // DELETE - FUNCIONARIO DEMITIDO
    app.delete('/funcionarios:id'), async(req, res) => {
        const id = parseInt(req.params.id)
        try {
            const demitido = await contratadoDAO.demiteFuncionario(id)
            res.json(demitido)
        } catch (error) {
            res.status(400).json({
                "message": error.message,
                "error": true
            })
        }
    }
}

module.exports = funcionario