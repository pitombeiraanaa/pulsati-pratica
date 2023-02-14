const Usuario = require("./usuario").Usuario;
const fs = require("fs");

const usuario = new Usuario("Adriano", "Flach");

fs.writeFile("meu-usuario.txt", usuario.getNomeCompleto(), (erro) => {
  if (erro) {
    console.log(`Erro: ${erro}`);
  } else {
    fs.readFile("meu-usuario.txt", "utf-8", (erro, texto) => {
      if (erro) {
        console.log("Erro ler arquivo: ", erro);
      } else {
        console.log(texto);
      }
    });
  }
});
