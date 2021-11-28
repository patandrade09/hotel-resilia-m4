const moment = require('moment')

class Funcionario {
    constructor(id, nomeCompleto, email, telefone, endereco, RG, CPF, dataDeNascimento, cargo, turno, setor, remuneracao) {
        this.id = id
        this.nomeCompleto = nomeCompleto
        this.email = this._validaEmail(email)
        this.telefone = telefone
        this.endereco = endereco
        this.RG = this._validaRG(RG)
        this.CPF = this._validaCPF(CPF)
        this.dataDeNascimento = moment().format("YYYY-MM-DD")
        this.cargo = cargo
        this.turno = turno
        this.setor = setor
        this.remuneracao = remuneracao
    }

    _validaEmail(email) {
        if (email.includes('@')) {
            return email
        } else {
            throw new Error("Insira um e-mail valido.")
        }
    }

    _validaRG(RG) {
        if (RG.length != 9) {
            throw new Error("Campo RG deve ter 9 carácteres.")
        } else {
            return RG
        }
    }
    _validaCPF(CPF) {
        if (CPF.length != 11) {
            throw new Error("Campo CPF deve ter 11 carácteres.")
        } else {
            return CPF
        }
    }
}

module.exports = Funcionario