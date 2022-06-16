const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        titulo: 'Pug Page :)',
        mensagem: 'Creating a page with pug'
    });
});

app.listen(3000, () => {
    console.log('Servidor Funcionando')
});