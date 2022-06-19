const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});

// deve se usar no link ↓↓↓ (/images.png por exemplo)
app.use(express.static("public"));

app.get('/', function(req, res) {
    res.send('Server gets the request')
});

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


app.get('/processar_dados', function(req, res) {
// para receber os valores usa o ↓↓↓ com get usa query
    res.end('Bem-vindo: ' + req.query.nome + '; Idade: ' + req.query.idade);
});


// usando o arrow function colocamos os parametros ↓↓↓ depois a função
app.post('/processar_dados', urlencodedParser, (req, res) => {
// para receber os valores usa o ↓↓↓ com post usa body
    res.end('Bem-vindo: ' + req.body.nome + '; Idade: ' + req.body.idade);
});

app.listen(3000);