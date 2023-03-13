const express = require("express");
const {
  createPassageiro,
  updatePassageiro,
  getPassageiro,
  getAllPassageiros,
  deletePassageiro,
} = require("./controller/passageiroController");
const { salvarArquivo } = require("./promessas");
const classePassageiro = require("./passageiro").classePassageiro;
const app = express();
AppDataSource.initialize()
  .then(() => {
    console.log("Conectado com sucesso ao banco");
    const app = express();
    app.use(express.json());

    app.post("/passageiros", new PassageiroController().create);
    app.get("/passageiros/:id", new PassageiroController().get);
    app.put("/passageiros/:id", new PassageiroController().update);
    app.delete("/passageiros/:id", new PassageiroController().delete);

    app.listen(8007);
  })
  .catch((e) => console.log("Erro ao conectar ao banco: ", e));