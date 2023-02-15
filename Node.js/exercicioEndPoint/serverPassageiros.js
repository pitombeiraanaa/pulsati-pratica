const http = require("http");
const classes = require("./classes").Passageiros;
const salvarArquivo = require("./arquivo").salvarArquivo;
const lerArquivo = require("./arquivo").lerArquivo;

http
  .createServer((req, res) => {
    //METODO POST
    if (req.method == "POST") {
      if (req.url.indexOf("/Passageiros") >= 0) {
        var body = "";
        req.on("data", function (chunk) {
          body += chunk;
        });

        req.on("end", function () {
          const Passageiros = JSON.parse(body);
          console.log(Passageiros);

          salvarArquivo(
            `${Passageiros.nomePassageiro}.json`,
            JSON.stringify(Passageiros)
          );
          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ data: "Criado com Sucesso" }));
        });
      }

      // METODO PUT
    } else if (req.method == "PUT") {
      if (req.url.indexOf("/Passageiros") >= 0) {
        var body = "";
        req.on("data", function (chunk) {
          body += chunk;
        });
        req.on("end", function () {
          const Passageiros = JSON.parse(body);
          console.log(Passageiros);
          salvarArquivo(
            `${Passageiros.nomePassageiro}.json`,
            JSON.stringify(Passageiros)
          );
          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ data: "Atualizado com Sucesso" }));
        });

        //METODO GET
      } else if (req.method == "GET") {
        if (req.url.indexOf("/Passageiros") >= 0) {
          res.writeHead(201, {
            "Content-Type": "application/json",
          });

          lerArquivo("./Passageiros.json").then((conteudo) => {
            res.end(conteudo);
          });
        } else {
          res.end("Not found");
        }
      } else {
        res.end("Not found");
      }
    }
  })
  .listen(8000, () => console.log("Servidor inicializado na porta 8000"));
