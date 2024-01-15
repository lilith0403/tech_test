# Projeto de API com MongoDB e Express

Este projeto é uma REST API básica construída com Node.js, Express e MongoDB para gerenciar informações sobre usuários. Ele oferece operações CRUD (Create, Read, Update, Delete) para a entidade "Person".

## Recursos utilizados

1. MongoDB Atlas (Banco de dados em Cloud)
2. Postman (Programa de requisições)
3. REST Client (Extensão do VScode para testar as requsições)
4. Render (Utilizado para fazer Deploy da aplicação)

## Dependências Principais

1. Express: Framework para Node.js.
2. Mongoose: ODM (Object-Document Mapper) para MongoDB.
3. dotenv: Carregamento de variáveis de ambiente a partir de um arquivo.
4. nodemon: Atualização do servidor em tempo real


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

5. Você pode acessar o servidor de modo local (localhost:3333) ou online por meio do Render

```bash
https://tech-test-rzw4.onrender.com/person
```

## Executando a Aplicação

Execute o seguinte comando para iniciar o servidor:

```bash
npm start
```
O servidor estará disponível tanto no localhost:<3333> quanto no endereço: https://tech-test-rzw4.onrender.com/person

# Rotas API
## Criação de Registro de Usuário (POST)

```bash
POST https://tech-test-rzw4.onrender.com/person
Content-Type: application/json

{
    "name": "Lucca",
    "email": "user123@gmail.com",
    "birth": "03/05/2020"
}

```
## Recuperação de Todos os Usuários (GET)

```bash
GET https://tech-test-rzw4.onrender.com/person
```
## Recuperação de Um Unico Usuário (GET)

```bash
GET https://tech-test-rzw4.onrender.com/person/<id>
```

## Atualização de Cadastro de Usuário (PATCH)

```bash
PATCH https://tech-test-rzw4.onrender.com/person/<id>
Content-Type: application/json
{
    "name": "Vitor",
    "email": "user123@gmail.com",
    "birth": "03/05/2020"
}
```
## Exclusão de Usuários (DELETE)

```bash
DELETE https://tech-test-rzw4.onrender.com/person/<id>
```

# Estrutura do Projeto

1. index.js: Arquivo principal para configurar e iniciar o servidor.
2. models/Person.js: Definição do modelo de dados da pessoa usando Mongoose.
3. routes/personRoutes.js: Rotas da API relacionadas a pessoas.
4. .env: Variáveis de ambiente para o acesso so MongoDBAtlas.

# Conclusão

Em síntese, o projeto de API com MongoDB e Express proporciona uma implementação eficiente de operações CRUD para a entidade "Person". A configuração inicial é bem elaborada, otimizando a aplicação com o uso de tecnologias como MongoDB Atlas, Postman e Render. As rotas API são claramente definidas, facilitando o entendimento, e a estrutura do projeto segue boas práticas, com ênfase nas principais dependências, Express e Mongoose.






