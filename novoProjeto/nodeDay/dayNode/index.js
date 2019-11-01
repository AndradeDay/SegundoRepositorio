const express = require('express');
//require(express)instaciando pro projeto - utilizar
//chamando pro projeto

const server = express();
//declaracao de uma função > possui metodos que podem ser acessados
//chama a funcao pra poder acessar os metodos 

server.get('/', function (req, res) {
    res.json('hello world');
});

server.get('/books/:bookId', (req, res, next) => {
    res.json (req.params);
});

server.get('/users/:username', (req, res, next) => {
    res.json (req.params);
});


server.get('/users/:username/books/:bookId', (req, res, next) => {
    res.json (req.params);
});
    server.get('/about', function (req, res) {
        res.json('about');
    });

    server.get('/search', (req,res,next) => {
        res.json(req.query)
    });

       

        server.listen(3000);
//3000 porta padrão node

//isso é feito em arquivos separados 
//req - requisicao; res -resultado/resposta
//(argumento) get(rota /, função)

