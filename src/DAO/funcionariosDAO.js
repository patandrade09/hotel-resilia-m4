class funcionariosDAO {
    constructor(db) {
        this.db = db
    }

    // CREATE
    async novoFuncionario(novoFuncionario) {
        try {
            const INSERT_FUNCIONARIOS = `
        INSERT INTO FUNCIONARIOS
            (Nome_Completo, Email, Telefone, Endereço, RG, CPF, Data_de_Nascimento, Cargo, Turno, Setor, Remuneracao)
        VALUES
            (?,?,?,?,?,?,?,?,?,?,?)
        `
            return new Promise((resolve, reject) => {
                this.db.run(INSERT_FUNCIONARIOS, [...Object.values(novoFuncionario)], (error) => {
                    if (error) {
                        reject({
                            "msg": error.message,
                            "error": true
                        })
                    } else {
                        resolve({
                            "req": novoFuncionario,
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
    async buscaFuncionarioAll() {
        try {
            const SELECT_ALL_FUNCIONARIOS = `
        SELECT * FROM FUNCIONARIOS
        `
            return new Promise((resolve, reject) => {
                this.db.all(SELECT_ALL_FUNCIONARIOS, (error, rows) => {
                    if (error) {
                        reject({
                            "msg": error.message,
                            "error": true
                        })
                    } else {
                        resolve({
                            "req": rows,
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
    async buscaFuncionario(id) {
        try {
            const SELECT_FUNC_BY_ID =
                `SELECT * FROM FUNCIONARIOS
            WHERE ID = ?`

            return new Promise((resolve, reject) => {
                this.db.all(SELECT_FUNC_BY_ID, id, (error, rows) => {
                    if (error) {
                        reject({
                            "msg": error.message,
                            "error": true
                        })
                    } else {
                        resolve({
                            "req": rows,
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
    async atualizaFuncionario(id, atualizaFuncionario) {
        try {
            const UPDATE_FUNC = `
            UPDATE FUNCIONARIOS
            SET Nome_Completo = ?, Email = ?, Telefone = ?, Endereço = ?, RG = ?, CPF = ?,
            Data_de_Nascimento = ?, Cargo = ?, Turno = ?, Setor = ?, Remuneracao = ?
            WHERE ID = ?`

            return new Promise((resolve, reject) => {
                this.db.run(UPDATE_FUNC, [atualizaFuncionario.Nome_Completo, atualizaFuncionario.Email,
                        atualizaFuncionario.Telefone, atualizaFuncionario.Endereço, atualizaFuncionario.RG,
                        atualizaFuncionario.CPF, atualizaFuncionario.Data_de_Nascimento, atualizaFuncionario.Cargo,
                        atualizaFuncionario.Turno, atualizaFuncionario.Setor, atualizaFuncionario.Remuneracao, id
                    ],
                    (error) => {
                        if (error) {
                            reject({
                                "msg": error.message,
                                "error": true
                            })
                        } else {
                            resolve({
                                "msg": `Dados de Funcionario ${id} ${Nome_Completo} foram atualizados.`,
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
    async demiteFuncionario(id) {
        try {
            const DELETE_FUNC = `
            DELETE FROM FUNCIONARIOS
            WHERE ID = ?`

            return new Promise((resolve, reject) => {
                this.db.run(DELETE_FUNC, id, (error) => {
                    if (error) {
                        reject({
                            "msg": error.message,
                            "error": true
                        })
                    } else {
                        resolve({
                            "req": `Funcionario ${id} desligado com sucesso.`,
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