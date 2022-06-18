
let http = require('http');
// to date and hour
let date = require('./modules');
// to calculator
let calc = require('./modules');
let x = 10;
let y = 5;
// to travelCousts
let travelCousts = require('./modules')
let consumoGas = 10;
let consumoAlc = 7;
let precoGas = 5;
let precoAlc = 3;
let valor = 100;

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Building a server with Node.js</h1>');

   // date and hour
    res.write('<h2>With some basic challenges </h2>');
    res.write('<h2>Date and Hour</h2>')
    res.write('Date and Hour actual: ' + date.getDataHora());
    res.write('<hr>');

    // calculator
    res.write('<h2>Calculator</h2>');
    res.write('x + y = ' + calc.sum(x, y) + '<br>');
    res.write('x - y = ' + calc.subtract(x, y) + '<br>');
    res.write('x * y = ' + calc.multiply(x, y) + '<br>');
    res.write('x / y = ' + calc.division(x, y));
    
    // to travelCousts
    res.write('<hr><h2>Travel Cousts</h2>');
    res.write('Consumo Gasolina = 10;'+
    '<br>Consumo Alcool = 7;' +
    '<br>Preco Gasolina = 5;' +
    '<br>Preco Alcool = 3;' +
    '<br>Valor Abastecido = 100;' + '<br><br>');
    res.write('Autonomia com Gasolina: ' + travelCousts.autonomia(consumoGas, precoGas, valor));
    res.write('<br> Autonomia com Alcool: ' + travelCousts.autonomia(consumoAlc, precoAlc, valor));
    res.write('<br>Consumo: ' + travelCousts.consumo(200, precoGas, valor)+ '<hr>');


    res.end()
}).listen(8080); 
