
## **Projeto Final - M4 - Resilia Educação**     

## **API REST - Hotel California**   
💛🦉

Esta  `API REST`  foi desenvolvida como exemplo para um  `Hotel`, onde realizamos operações CRUD para a entidade   `Funcionários`.

**Ferramentas :** 
 -   VScode
 -   Insomnia ou Postman

**Bibliotecas :** 

 - SQLite 
 - Express 
 - Nodemon
 - Jest
 - Supertest
 ##
 **Inicializando o projeto:**

 - Passo 1: Clone este repositório no seu computador: 

     git clone https://github.com/patandrade09/hotel-resilia-m4

- Acesse a pasta criada através do cmd:

      cd hotel-resilia-m4
      
- Realize os testes automatizados elaborados com o Supertest: 
	 
      npm run test
	    
- Inicie do servidor inserindo o comando abaixo: 

      npm run dev


##
 **Utilizando as Rotas:**
Para uma melhor experiência na utilização desta API, recomenda-se o uso de ferramentas como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download) para testarmos as rotas abaixo. 
 
  **POST  - Inserindo um novo funcionário no banco de dados SQLite:**
  
  Insira os dados em formato JSON na rota abaixo: 
  
  `POST`   `http://localhost:3002/funcionarios`

      {"nomeCompleto":"nome funcionario",
       "email":"funcionario@email.com",
       "telefone":"99999999999",
       "endereco":"Rua do funcionario",
       "rg":"123456789",
       "cpf":"12345678911",
       "dataDeNascimento": "31/12/20",
       "cargo":"cargo funcionario",
       "turno":"turno funcionario",
       "setor":"setor funcionario",
       "remuneracao":"salario funcionario"}
##
  **GET  - Buscando funcionário específico no banco de dados:**
  
  GET  - http://localhost:3002/funcionarios/:id
  
  **Exemplo:** 
  
 `GET`  `http://localhost:3002/funcionarios/10`
  

    {
    "funcionarios": 
    { 
    "ID": 10,
    "Nome_Completo": "xxxxxxxx",
    "Email": "xxxx@yyyyy.com",
    "Telefone": "21889999999",
    "Endereco": "Rua XYZ",
    "RG": "123456789",
    "CPF": "12345678911",
    "Data_de_Nascimento": "12/12/12",
    "Cargo": "analista",
    "Turno": "dev",
    "Setor": "devweb",
    "Remuneracao": "10000"
    }, 
    "error": false 
    }
   
   ##
   **GET - Buscando todos os funcionários no banco de dados:**

GET - http://localhost:3002/funcionarios

##
   **PATCH - Atualizar dados de funcionário específico no banco de dados:**

PATCH  http://localhost:3002/funcionarios/:id

**Exemplo:** 
  `PATCH` `http://localhost:3002/funcionarios/10`

    { "setor":"team back-end"}
    Deverá retornar: 
    {"msg":"Dados atualizados.","erro":false}
##
 **DELETE - Deletar dados de funcionário específico no banco de dados:**

DELETE -  http://localhost:3002/funcionarios/:id

**Exemplo:** 
  `DELETE` `http://localhost:3002/funcionarios/5`

    { 
    "funcionarios": "Funcionario desligado com sucesso.",
    "error": false
    }
  ##
 **Heroku** 
  Este banco foi hospedado na plataforma [Heroku](https://id.heroku.com/login) 
  [Banco Hotel California](https://api-hotel-m4.herokuapp.com/funcionarios)
  ##
API desenvolvida por [Patrícia Andrade](https://www.linkedin.com/in/patr%C3%ADcia-andrade-09/) para o módulo 4 do curso de desenvolvimento web [Resilia Educação](https://www.resilia.com.br/). 🦉
