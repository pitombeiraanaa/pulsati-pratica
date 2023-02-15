const http = require('http');
const classes = require('./classes').Aeroporto;

http.createServer((req, res) => {
    if (req.method == 'POST') {
      if (req.url.indexOf('/Aeroporto') >= 0) {
        var body = "";
        req.on('data', function (chunk) {
          body += chunk;
        });
        req.on('end', function () {
          const Aeroporto = JSON.parse(body);
          console.log(Aeroporto);
          res.end("successfully submitted");
        });
      } else {
        res.end('Not found');
      }
    } else {
      res.end('Not found');
    }
  }).listen(8000, () => console.log('Servidor inicializado na porta 8000'));

  http.createServer((req, res) => {
    if (req.method == 'PUT') {
      if (req.url.indexOf('/Aeroportoput') >= 0) {
        var body = "";
        req.on('data', function (chunk) {
          body += chunk;
        });
        req.on('end', function () {
          const Aeroporto = JSON.parse(body);
          console.log(Aeroporto);
          res.end("successfully submitted");
        });
      } else {
        res.end('Not found');
      }
    } else {
      res.end('Not found');
    }
  }).listen(8001, () => console.log('Servidor inicializado na porta 8001'));