//Importando os pacotes e bibliotecas
const express = require('express'); //objeto de definição do servidor
const mongoose = require('mongoose'); //objeto de instância do ORM
const cors = require('cors'); //objeto de definição do servidor

const routes = require('./routes'); //objeto das rotas criadas manualmente

//Ativando o servidor
const server = express();

//Definindo os dados de conexão com o banco de dados
var user = 'omnistack';
var password = 'omnistack';
var database = 'omnistack8';
var connectionString = `mongodb+srv://${user}:${password}@cluster0-xd6cr.mongodb.net/${database}?retryWrites=true&w=majority`;
var options = {
    useNewUrlParser: true
};

//Conectando com o banco de dados
mongoose.connect(connectionString, options);

//Setando as definições do servidor
server.use(cors()); //aceitando requisições de diversas portas
server.use(express.json()); //aceitando requisições em json
server.use(routes); //aceitando todas as rotas cadastradas

//Selecionando a porta de conexão com o servidor
server.listen(3333);