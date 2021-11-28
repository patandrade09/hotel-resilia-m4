const Funcionario = require('../model/funcionarios-model')
const FuncionarioDAO = require('../DAO/funcionariosDAO')

const funcionario = (app, db) => {
    const contratadoDAO = new FuncionarioDAO(db)

    //CREATE FUNCIONARIO
    app.post('/funcionario', async(req, res) => {
        try {
            const contratado = new Funcionario(req.body.nomeCompleto, req.body.email, req.body.telefone, req.body.endereco, req.body.RG, req.body.CPF, req.body.dataDeNascimento, req.body.cargo, req.body.turno, req.body.setor, req.body.remuneracao)
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
    app.get('./funcionario:id', async(req, res) => {
        const id = parseInt(req.params.id);
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
    app.get('./funcionarios', (req, res) => {
        try {
            FuncionarioDAO.buscaFuncionarioAll(res)
        } catch (error) {
            res.status(400).json({
                "message": error.message,
                "error": true
            })
        }
    })

    // UPDATE - ATUALIZA FUNCIONARIO
    app.patch('./funcionario:id', (req, res) => {
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
    app.delete('/funcionario:id'), async(req, res) => {
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