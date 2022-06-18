module.exports = require('./lib/express');
const app = express();

app.get('/', function(req, res) {
    res.send('Server gets the request')
});

app.listen(8080);