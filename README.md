# Projeto de API com MongoDB e Express

Este projeto é uma RESTful API básica construída com Node.js, Express e MongoDB para gerenciar informações sobre pessoas. Ele oferece operações CRUD (Create, Read, Update, Delete) para a entidade "Person".

## Recursos utilizados

1. MongoDB Atlas (Banco de dados em Cloud)
2. Postman (Programa de requisições)
3. REST Client (Extensão do VScode para testar as requsições)
4. Render (Utilizado para fazer Deploy da aplicação)

## Configuração Inicial

1. Instale as dependências usando o npm:

    ```bash
    npm install express mongoose nodemon 
    ```

2. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

    ```dotenv
    DB_USER=seu_usuario_do_MongoDBAtlas
    DB_PASSWORD=sua_senha_do_MongoDBAtlas
    ```

    Certifique-se de substituir `seu_usuario_do_MongoDBAtlas` e `sua_senha_do_MongoDBAtlas` pelas suas credenciais MongoDBAtlas.

3. Crie um banco de dados no MongoDBAtlas
```bash
https://www.mongodb.com/atlas/database
```

4. Instale a extensão REST Client ou faça o download do Postman

```bash
Name: REST Client
Id: humao.rest-client
Description: REST Client for Visual Studio Code
Version: 0.25.1
Publisher: Huachao Mao
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=humao.rest-client
```

```bash
https://www.postman.com/downloads/
```

5. Você pode acessar o servidor por de maneira local ou online por meio do Render

```bash
https://dataside-project.onrender.com/person
```

## Executando a Aplicação

Execute o seguinte comando para iniciar o servidor:

```bash
npm start

O servidor estará acessível em http://localhost:sua_porta_preferida.
```

# Rotas API
## POST

```bash
POST https://dataside-project.onrender.com/person
Content-Type: application/json

{
    "name": "luzais",
    "email": "junior@gmail.com",
    "birth": "03052500"
}

```
## Recuperação de Todas as Pessoas (GET)

```bash
GET https://dataside-project.onrender.com/person
```
## Recuperação de Um Unico Usuário (GET)

```bash
GET https://dataside-project.onrender.com/person/<id>
```

## Atualização de Pessoa (PATCH)

```bash
PATCH https://dataside-project.onrender.com/person/<id>
Content-Type: application/json
{
    "name": "Lucca4",
    "email": "lucca0403@gmail.com",
    "birth": "04032003"
}
```
## Exclusão de Pessoa (DELETE)

```bash
DELETE https://dataside-project.onrender.com/person/<id>
```

# Estrutura do Projeto

server.js: Arquivo principal para configurar e iniciar o servidor.
models/Person.js: Definição do modelo de dados da pessoa usando Mongoose.
routes/personRoutes.js: Rotas da API relacionadas a pessoas.

# Dependências Principais

Express: Framework web para Node.js.
Mongoose: ODM (Object-Document Mapper) para MongoDB.
dotenv: Carregamento de variáveis de ambiente a partir de um arquivo.



