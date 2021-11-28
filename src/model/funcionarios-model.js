class Funcionario {
    constructor(nomeCompleto, email, telefone, endereco, rg, cpf, dataDeNascimento, cargo, turno, setor, remuneracao) {

        this.nomeCompleto = nomeCompleto
        this.email = this._validaEmail(email)
        this.telefone = telefone
        this.endereco = endereco
        this.rg = this._validaRG(rg)
        this.cpf = this._validaCPF(cpf)
        this.dataDeNascimento = dataDeNascimento
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

    _validaRG(rg) {
        if (rg.length != 9) {
            throw new Error("Campo RG deve ter 9 carácteres.")
        } else {
            return rg
        }
    }
    _validaCPF(cpf) {
        if (cpf.length != 11) {

            throw new Error("Campo CPF deve ter 11 carácteres.")
        } else {
            return cpf
        }
    }
}

module.exports = Funcionario