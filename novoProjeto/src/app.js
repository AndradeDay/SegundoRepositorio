const express = require('express')
const app = express()


//rotas

const index = require('./routes/index')
const professoras = require('./routes/professorasRoute')

app.use(function (req, res, next) {
    res.header("Control-Allow-Origin", "*")
    res.header(
        "Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Aceept"
    )

    next()
})

// código Middlewere

//chamando rotas dentro de const com conts com rotas de outros arquivos

app.use("/", index)
app.use('/professoras', professoras)

// quando chamar /, ele vai buscar minha const *index*
// o mesmo vale pra professoras 

module.exports = app;

// aqui é determinado que App (o arquivo index) pode ser exportado na aplicação
// ou seja chamado em outros arquivos 

