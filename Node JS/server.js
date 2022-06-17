let http = require('http');
let date = require('./modules');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Building a server with Node,js</h1>');
    res.write('Date and Hour actual: ' + date.getDataHora());
    res.end()
}).listen(8080);

