const request = require('supertest')
const app = require("../app")

test("Teste lista de funcionários.", async() => {
    const res = await request(app)
        .get("/funcionarios")
    expect(res.statusCode).toBe(200)
})

test("Teste busca para funcionário específico.", async() => {
    const res = await request(app)
        .get("/funcionarios/:id")
    expect(res.statusCode).toBe(200)

})

test("Teste inserção de funcionários.", async() => {
    const res = await request(app)
        .post("/funcionarios")
        .send({
            "nomeCompleto": "xxxxxxxx",
            "email": "xxxx@yyyyy.com",
            "telefone": "21889999999",
            "endereco": "Rua XYZ",
            "rg": "123456789",
            "cpf": "12345678911",
            "dataDeNascimento": "12/12/12",
            "cargo": "analista",
            "turno": "dev",
            "setor": "devweb",
            "remuneracao": "10000"
        })
    expect(res.statusCode).toBe(200)
})

test("Teste atualização de funcionários.", async() => {
    const res = await request(app)
        .patch("/funcionarios/:id")
    expect(res.statusCode).toBe(200)
})

test("Teste deleção de funcionário.", async() => {
    const res = await request(app)
        .delete("/funcionarios/:id")
    expect(res.statusCode).toBe(200)
})