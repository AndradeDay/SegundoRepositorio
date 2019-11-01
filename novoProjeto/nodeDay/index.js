const express = require('express');

const server = express();

// na sequencia req depois res

server.get('/', function (req, res) {
    res.send('Hello Word');
});

const usuariosArray = ['Fernanda', 'Day', 'Jéssica', 'Paula', 'Tati'];

function chegarUsuarios(req, res, next) {
    const usuarios = usuariosArray[req.params.index]
    if (!usuarios) {
        return res.status(400).json('Index não existe');
    }
    req.usuarios = usuarios;
    return next();
}



server.get('/usuarios/', (req, res) => {
    return res.json(usuariosArray)
});
server.get('/usuariosArray/:index', chegarUsuarios, (req, res, next) => {
    const id = req.params.index;
    return res.json(usuariosArray[id]);

});

const livros = ['A guerra do gelo e foro', 'Dança dos dragões', 'Maus', 'pequeno princepe'];

server.get('/livros/', (req, res) => {
    return res.json(livros)
});


server.get('/livros/:index', (req, res) => {
    const id = req.params.index;
    return res.json(livros[id]);
})

server.get('/livros/:indexL/usuariosArray/:indexU', chegarUsuarios, (req, res, next) => {
    const { indexL, indexU } = req.params;
    const resultUsuarios = usuariosArray[indexU];
    const resultLivros = livros[indexL];
    const resultFinal = 'Usuario: ' + resultUsuarios +
        Livro + resultLivros;
    return res.json(resultFinal);
});

server.get('/country', (req, res, next) => {
    //res.json.length(req.)
    res.json(req.query.pais)
});

// query string no browser = http://localhost:3001/country?pais=Espanha 
// apos o "?" entendemos que é uma query string, ex pais é a variavel espanha é o valor atribuido a varialvel 
//res.json(req.query.pais) o resultado mnostrado vai ser o valor do parametro na requisição, ou seja
// ele solicita o valor de pais que é espanha
server.listen(3001);

// middlewere validador

