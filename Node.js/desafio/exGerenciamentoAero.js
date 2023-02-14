//Refatore o exercicio de gerenciamento de aeroporto .
//Altere para que quando inserir um aeroporto, voo ou passageiro, essa informação seja salva em um arquivo e retorne
//para o usuario a confirmação que salvou

const salvarArquivo = require("./arquivo").salvarArquivo;
// const lerArquivo = require("./arquivo").lerArquivo;
// const Usuario = require("./usuario").Usuario;

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Voo {
  constructor(codigoVoo, codigoAeroOrigem, codigoAeroDestino) {
    this.codigoVoo = codigoVoo;
    this.codigoAeroOrigem = codigoAeroOrigem;
    this.codigoAeroDestino = codigoAeroDestino;
  }
  getVoo() {
    return `${this.codigoVoo}  ${this.codigoAeroOrigem} ${this.codigoAeroDestino}`;
  }
}

exports.Voo = Voo;

class Passageiros {
  constructor(nomePassageiro, codigoVoo) {
    this.nomePassageiro = nomePassageiro;
    this.codigoVoo = codigoVoo;
  }
  getPassageiros() {
    return `${this.nomePassageiro}  ${this.codigoVoo}`;
  }
}
exports.Passageiros = Passageiros;

class Aeroporto {
  constructor(codigoVoo, nomeAeroportoOrigem, nomeTodosPassageiros) {
    this.codigoVoo = codigoVoo;
    this.nomeAeroportoOrigem = nomeAeroportoOrigem;
  }
  getAeroporto() {
    return `${this.codigoVoo} ${this.nomeAeroportoOrigem}`;
  }
}
exports.Aeroporto = Aeroporto;

const voo = [];
const passageirosLista = [];
const aeroporto = [];

function adicionarVoo() {
  readline.question("Digite o nome da empresa:", (nomeEmpresaAerea) => {
    readline.question("Digite o código do voo:", (codigoVoo) => {
      readline.question(
        "Digite o código do aeroporto de origem:",
        (codigoAeroOrigem) => {
          readline.question(
            "Digite o código do aeroporto de destino:",
            (codigoAeroDestino) => {
              let voar = new Voo(
                nomeEmpresaAerea,
                codigoVoo,
                codigoAeroOrigem,
                codigoAeroDestino
              );

              voo.push(voar);
              salvarArquivo("voo.txt", voar.getVoo());
              console.log("Voo adicionado com sucesso!");
              showMenu();
              console.log("Voo adicionado com sucesso!");
              showMenu();
            }
          );
        }
      );
    });
  });
}

function adicionarPassageiro() {
  readline.question("Digite o nome do passageiro: ", (nomePassageiro) => {
    readline.question("Digite o codigo do voo: ", (codigoVoo) => {
      let passageiros = new Passageiros(nomePassageiro, codigoVoo);
      passageirosLista.push(passageiros);
      salvarArquivo("passageiros.txt", passageiros.getPassageiros());
      console.log("Passageiro adicionado com sucesso!");
      showMenu();
    });
  });
}

function adicionarAeroporto() {
  readline.question("Digite o nome da empresa: ", (nomeEmpresaAerea) => {
    readline.question("Digite o endereço empresa: ", (endereco) => {
      let aero = new Aeroporto(nomeEmpresaAerea, endereco);
      aeroporto.push(aero);
      salvarArquivo("aeroporto.txt", aero.getAeroporto());
      console.log("Aeroporto adicionado com sucesso!");
      showMenu();
    });
  });
}

function listarPassageiros() {
  console.log(passageiros);
  showMenu();
}

function listarVoo() {
  console.log(voo);
  console.log(passageiros);
  console.log(aeroporto);
  showMenu();
}

function showMenu() {
  readline.question(
    "Digite a opção: \n 1 - Adicionar voo \n 2 - Adicionar passageiro \n 3 - Aeroporto \n 4 - Listar passageiros  \n 5 - Listar Voo \n 6 - Sair \n",
    (opcao) => {
      let armazenar = opcao;
      if (armazenar == "1") {
        adicionarVoo();
      } else if (armazenar == "2") {
        adicionarPassageiro();
      } else if (armazenar == "3") {
        adicionarAeroporto();
      } else if (armazenar == "4") {
        listarPassageiros();
      } else if (armazenar == "5") {
        listarVoo();
      } else if (armazenar == "6") {
        readline.close();
      } else {
        console.log("Opção inválida!");
        showMenu();
      }
    }
  );
}
showMenu();
