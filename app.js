var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Bah!');
    console.log('rodando no servidor  http://localhost:8080/');
}).listen(8080);