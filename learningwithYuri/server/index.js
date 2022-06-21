const cors = require('cors');
const express = require('express')

const app = express()

app.use(cors({
    origin: "*"
}));

app.get('/', function (req, res) {
    res.send('Learning with NPM, creating a server')
})

app.get('/page2', function (req, res) {
    res.send('Page 2 different content')
})

app.listen(3000, function (){
    console.log("test.server.ok")
})

