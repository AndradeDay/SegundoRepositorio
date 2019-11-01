const app = require('./src/app')
const port = 3000;

app.listen(port,function(){
console.log(`app está rodando na porta ${port}`);
})

// no console.log eu informo no prompt em qual porta está saindo, isso é importante. 

// Criar pasta com o nome SRC, para: informar na requisição  (primeira const) que sera buscado da
// pasta Src no arquivo App.

