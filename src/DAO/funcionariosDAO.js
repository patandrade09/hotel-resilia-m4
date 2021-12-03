class funcionariosDAO {
    constructor(db) {
        this.db = db
    }

    // CREATE
    novoFuncionario(novoFuncionario) {
        try {
            const INSERT_FUNCIONARIOS = `
        INSERT INTO FUNCIONARIOS
            (Nome_Completo, Email, Telefone, Endereco, RG, CPF, Data_de_Nascimento, Cargo, Turno, Setor, Remuneracao)
        VALUES
            (?,?,?,?,?,?,?,?,?,?,?)
        `
            return new Promise((resolve, reject) => {
                this.db.run(INSERT_FUNCIONARIOS, [...Object.values(novoFuncionario)], (error) => {
                    if (error) {
                        console.log(error)
                        reject({
                            "msg": error.message,
                            "error": true
                        })
                    } else {
                        resolve({
                            "funcionarios": novoFuncionario,
                            "error": false
                        })
                    }
                })
            })

        } catch (error) {
            throw new Error(error.message)
        }
    }

    // READ
    buscaFuncionarioAll() {
        try {
            const SELECT_ALL_FUNCIONARIOS = `
        SELECT * FROM FUNCIONARIOS
        `
            return new Promise((resolve, reject) => {
                this.db.all(SELECT_ALL_FUNCIONARIOS, (error, rows) => {
                    if (error) {
                        console.log(error)
                        reject({
                            "msg": error.message,
                            "error": true
                        })
                    } else {
                        resolve({
                            "funcionarios": rows,
                            "error": false
                        })
                    }
                })
            })
        } catch (error) {
            throw new Error(error.message)
        }

    }

    // READ ID
    buscaFuncionario(id) {
        try {
            const SELECT_FUNC_BY_ID =
                `SELECT * FROM FUNCIONARIOS
            WHERE ID = ?`

            return new Promise((resolve, reject) => {
                this.db.get(SELECT_FUNC_BY_ID, id, (error, rows) => {
                    if (error) {
                        console.log(error)
                        reject({
                            "msg": error
                        })
                    } else {
                        resolve({
                            "funcionarios": rows,
                            "error": false
                        })
                    }
                })
            })
        } catch (error) {
            throw new Error(error.message)
        }
    }

    // UPDATE
    atualizaFuncionario(id, atualizaFuncionario) {
        try {
            const UPDATE_FUNC =
                `
                UPDATE FUNCIONARIOS
                SET Nome_Completo = COALESCE(?, Nome_Completo) , Email = COALESCE(?, Email), Telefone = COALESCE(?, Telefone), Endereco = COALESCE(?, Endereco), RG = COALESCE(?, rg), CPF = COALESCE(?, cpf),
                Data_de_Nascimento = COALESCE(?, Data_de_Nascimento), Cargo = COALESCE(?, cargo), Turno = COALESCE(?, turno), Setor = COALESCE(?, setor), Remuneracao = COALESCE(?, remuneracao)
                WHERE ID = ?    
            `

            return new Promise((resolve, reject) => {

                this.db.run(UPDATE_FUNC, [atualizaFuncionario.nomeCompleto, atualizaFuncionario.email,
                        atualizaFuncionario.telefone, atualizaFuncionario.endereco, atualizaFuncionario.rg,
                        atualizaFuncionario.cpf, atualizaFuncionario.dataDeNascimento, atualizaFuncionario.cargo,
                        atualizaFuncionario.turno, atualizaFuncionario.setor, atualizaFuncionario.remuneracao, id
                    ],
                    (error) => {
                        if (error) {
                            console.log(error)
                            reject({
                                "msg": error
                            })
                        } else {
                            resolve({
                                "msg": `Dados atualizados.`,
                                "erro": false
                            })
                        }
                    })
            })
        } catch (error) {
            throw new Error(error.message)
        }
    }

    // DELETE
    demiteFuncionario(id) {
        try {
            const DELETE_FUNC = `
            DELETE FROM FUNCIONARIOS 
            WHERE ID = ?`

            return new Promise((resolve, reject) => {
                console.log("apiapi")
                this.db.run(DELETE_FUNC, id, (error) => {
                    if (error) {
                        reject({
                            "msg": error.message,
                            "error": true
                        })
                    } else {
                        resolve({
                            "funcionarios": `Funcionario desligado com sucesso.`,
                            "error": false
                        })
                    }
                })
            })
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

module.exports = funcionariosDAO