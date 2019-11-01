const express = require('express')
const router = express.Router()

// nas consta router, ele solita que ele me trata o metodo do express de roteamento 

router.get("/", function(req,res){
    res.status(200).send({
        title: "Reprograma Turma da Kellyzinea",
        version: "0.0.1"
    })
})

// quando um outro arquivo me solicitar o index, ele deve entender que o mesmo está 
// dentro da pasta deste local

module.exports = router

