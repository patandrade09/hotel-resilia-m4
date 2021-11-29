const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const pathFile = path.resolve(__dirname, 'database.db')

const db = new sqlite3.Database(pathFile)

// TABELA FUNCIONARIOS
const FUNCIONARIOS_SCHEMA =
    `CREATE TABLE IF NOT EXISTS "FUNCIONARIOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Nome_Completo" varchar,
    "Email" varchar,
    "Telefone" varchar,
    "Endereco" varchar,
    "RG" varchar,
    "CPF" varchar,
    "Data_de_Nascimento" varchar,
    "Cargo" varchar,
    "Turno" varchar,
    "Setor" varchar,
    "Remuneracao" varchar
  );`

const ADD_FUNCIONARIOS_DATA = `
INSERT INTO FUNCIONARIOS (Nome_Completo, Email, Telefone, Endereco, RG, CPF, Data_de_Nascimento, Cargo, Turno, Setor, Remuneracao)
VALUES 
    ('Bruno', 'bruno@gmail.com.br', '21887799888', 'Rua da Mata', '12345678900','12345678970', '12/12/12', 'Analista', 'Integral', 'Contabilidade', '4500'),
    ('Bruno', 'bruno@gmail.com.br', '21887799888', 'Rua da Mata', '12345678900','12345678970', '12/12/12', 'Analista', 'Integral', 'Contabilidade', '4500'),
    ('Bruno', 'bruno@gmail.com.br', '21887799888', 'Rua da Mata', '12345678900','12345678970', '12/12/12', 'Analista', 'Integral', 'Contabilidade', '4500')
`

function criaTabelaFunc() {
    db.run(FUNCIONARIOS_SCHEMA, (error) => {
        if (error) console.log(error)
    })
}

function populaTabelaFunc() {
    db.run(ADD_FUNCIONARIOS_DATA, (error) => {
        if (error) console.log(error)
    })
}

db.serialize(() => {
    criaTabelaFunc()
    populaTabelaFunc()
})