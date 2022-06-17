
let http = require('http');
// to date and hour
let date = require('./modules');
// to calculator
let calc = require('./modules');
let x = 10;
let y = 5;

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
   // date and hour
    res.write('<h1>Building a server with Node.js</h1>');
    res.write('<h2>With some basic challenges </h2>');
    res.write('Date and Hour actual: ' + date.getDataHora());
    res.write('<hr>');

    // calculator
    res.write('<h2>Calculator</h2>');
    res.write('x + y = ' + calc.sum(x, y) + '<br>');
    res.write('x - y = ' + calc.subtract(x, y) + '<br>');
    res.write('x * y = ' + calc.multiply(x, y) + '<br>');
    res.write('x / y = ' + calc.division(x, y));
    
    res.end()
}).listen(8080); 
