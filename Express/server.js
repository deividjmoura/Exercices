const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Server gets the request')
});

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080);