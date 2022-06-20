const express = require('express');
const app = express();
// quando se faz o envio de um formulário 
// através do post usa-se o body-parser
// para a leitura dos dados do body
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const { response } = require('express');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({ dest: '/tmp/' }).single('foto'));
// fields pode ser usado no lugar de 'single 
// para o caso de mais dados 

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/upload_file', function(req, res) {
    console.log('Nome: ' + req.file.originalname);
    console.log('Path: ' + req.file.path);
    console.log('Tipo: ' + req.file.mimetype);
    let file = __dirname + "/public/tmp/" + req.file.originalname;

    fs.readFile(req.file.path, function(err, data) {
        fs.writeFile(file, data, function(err) {
            if (err) {
                console.log('Erro: ' + err);
            } else {
                response = {
                    mensagem: 'Upload efetuado com suceso!',
                    arquivo: req.file.originalname
                }
            }
            res.end(JSON.stringify(response));
        })
    })
});


app.listen(3000);