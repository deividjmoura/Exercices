const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/logar", (req, res) => {
    let usuario = req.body.usuario;
    let senha = req.body.senha;
    let usuarios = [["daniel", "123"], ["maria", "234"], ["felipe", "345"], ["pitter", "456"]];
    // console.log(usuario + " " + senha);
    for (let x=0; x < usuarios.length; x++) {
        if (usuarios[x][0] == usuario){
            if (usuarios[x][1] == senha) {
            res.end("Seja bem-vindo " + usuario);
            } else {
            res.end("Senha incorreta!");
            }
        } 
    }
    res.end("Usuário não existe!");
} )

app.listen(3000);