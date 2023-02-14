//criar uma aplicação de gerenciamento de viagens com classes:
//passageiros
// voos
//aeroporto

// com as funcionalidades:
//A aplicação deve apresentar um menu no console com as opções, cada opção tem um número

//O menu de opçãoes deve ter as seguintes opções:
//Adicionar aeroporto, com as informações de Nome, código e endereço

//Adicionar voo, com as informações de código do voo, código aeroporto, codigo aeroporto destino e nome da empresa aerea

//Adicionar passageiro em um voo, com as informações de código do voo, nome do passageiro

//Listar voos, apresentando as informações: código do voo, nome do aeroporto de origem, nome do aeroporto de destino e
// o nome de todos os passageiros no voo

//Quando o usuario digitar o número de uma das opções, a aplicação deve solicitar as informações através do console,
// sendo que todas as informações são de preenchimento obrigatório

//ATENÇÃO: VOCÊ DEVE USAR CLASSES, ARRAYS E MAPS PARA ARMAZENAR AS INFORMAÇÕES OBTIDAS PELO USUÁRIO

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
}

class Passageiros {
  constructor(nomePassageiro, codigoVoo) {
    this.nomePassageiro = nomePassageiro;
    this.codigoVoo = codigoVoo;
  }
}

class Aeroporto {
  constructor(codigoVoo, nomeAeroportoOrigem, nomeTodosPassageiros) {
    this.codigoVoo = codigoVoo;
    this.nomeAeroportoOrigem = nomeAeroportoOrigem;
  }
}

const voo = [];
const passageiros = [];
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
              voo.push(
                new Voo(
                  nomeEmpresaAerea,
                  codigoVoo,
                  codigoAeroOrigem,
                  codigoAeroDestino
                )
              );
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
      passageiros.push(new Passageiros(nomePassageiro, codigoVoo));
      console.log("Passageiro adicionado com sucesso!");
      showMenu();
    });
  });
}

function adicionarAeroporto() {
  readline.question("Digite o nome da empresa: ", (nomeEmpresaAerea) => {
    readline.question("Digite o endereço empresa: ", (endereco) => {
      aeroporto.push(new Aeroporto(nomeEmpresaAerea, endereco));
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
  });
}
showMenu();
