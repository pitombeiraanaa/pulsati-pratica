const http = require("http");
const classes = require("./classes").Aeroporto;

http
  .createServer((req, res) => {
    // método POST
    if (req.method == "POST") {
      if (req.url.indexOf("/Aeroporto") >= 0) {
        var body = "";
        req.on("data", function (chunk) {
          body += chunk;
        });
        req.on("end", function () {
          const Aeroporto = JSON.parse(body);
          console.log(Aeroporto);
          res.end("successfully submitted");
        });

        // método PUT
        if (req.method == "PUT") {
          if (req.url.indexOf("/Aeroporto") >= 0) {
            var body = "";
            req.on("data", function (chunk) {
              body += chunk;
            });
            req.on("end", function () {
              const Aeroporto = JSON.parse(body);
              console.log(Aeroporto);
              res.end(JSON.stringify({ data: "Atualizado com Sucesso" }));
            });

            // método GET
          } else if (req.method == "GET") {
            if (req.url.indexOf("/Aeroporto") >= 0) {
              res.writeHead(201, {
                "Content-Type": "application/json",
              });

              lerArquivo("./Aeroporto.json").then((conteudo) => {
                res.end(conteudo);
              });
            } else {
              res.end("Not found");
            }
          }
        }
      } else {
        res.end("Not found");
      }
    }
  })
  .listen(8000, () => console.log("Servidor inicializado na porta 8000"));
