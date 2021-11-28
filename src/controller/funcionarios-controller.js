const Funcionario = require('../model/funcionarios-model')
const FuncionarioDAO = require('../DAO/funcionariosDAO')

const funcionario = (app, db) => {
    const contratadoDAO = new FuncionarioDAO

    //CREATE
    app.post('/funcionario', async(req, res) => {
        try {
            const contratado = new Funcionario(req.body.nomeCompleto, req.body.email, req.body.telefone, req.body.endereco, req.body.RG, req.body.CPF, req.body.dataDeNascimento, req.body.cargo, req.body.turno, req.body.setor, req.body.remuneracao)
            const insereFunc = await contratadoDAO.novoFuncionario(contratado)
            res.json(insereFunc)

        } catch (error) {
            throw new Error(error.message)
        }
    })


}

module.exports = funcionario