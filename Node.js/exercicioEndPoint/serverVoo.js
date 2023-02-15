const http = require("http");
const classes = require("./classes").Voo;
const salvarArquivo = require('./arquivo').salvarArquivo;
const lerArquivo = require('./arquivo').lerArquivo;

http
  .createServer((req, res) => {

    //método POST
    if (req.method == "POST") {
      if (req.url.indexOf("/Voo") >= 0) {
        var body = "";
        req.on("data", function (chunk) {
          body += chunk;
        });
        req.on("end", function () {
          const Voo = JSON.parse(body);
          console.log(Voo);
          salvarArquivo(`${Voo.codigoVoo}.json`, JSON.stringify(Voo));
          res.writeHead(201,
            {
              "Content-Type": "application/json"
            })
            res.end(JSON.stringify({ data: 'Salvo com sucesso!' }));
  
        });
      } else {
        res.end("Not found");
      }

     // método PUT

    } else if (req.method == "PUT") {
      if (req.url.indexOf("/Voo") >= 0) {
        var body = "";
        req.on("data", function (chunk) {
          body += chunk;
        });
        req.on("end", function () {
          const Voo = JSON.parse(body);
          console.log(Voo);

         salvarArquivo(`${Voo.CodigoVoo}.json`, JSON.stringify(Voo));
         res.writeHead(201,
          {
            "Content-Type": "application/json"
          })
          res.end(JSON.stringify({ data: 'Salvo com sucesso!' }));  
        });
      } else {
        res.end("Not found");
      }

    //método GET

    } else if (req.method == "GET") {
      if (req.url.indexOf("/Voo") >= 0) {
        res.writeHead(201, {
          "Content-Type": "application/json",
        });

        lerArquivo("./Voo.json").then((conteudo) => {
          res.end(conteudo);
        });
      } else {
        res.end("Not found");
      }
    } else {
      res.end("Not found");
    }
 })
.listen(8000, () => console.log("Servidor inicializado na porta 8000"));

    
