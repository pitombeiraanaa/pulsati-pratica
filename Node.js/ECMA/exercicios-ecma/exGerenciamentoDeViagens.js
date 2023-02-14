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
  class Aeroporto {
    constructor(nome, codigo, endereco) {
      this.nome = nome;
      this.codigo = codigo;
      this.endereco = endereco;
    }
  
    getNome() {
      return this.nome;
    }
  
    getCodigo() {
      return this.codigo;
    }
  
    getEndereco() {
      return this.endereco;
    }
  }
  
  class Voo {
    constructor(codigoVoo, codigoAeroportoOrigem, codigoAeroportoDestino, nomeEmpresaAerea) {
      this.codigoVoo = codigoVoo;
      this.codigoAeroportoOrigem = codigoAeroportoOrigem;
      this.codigoAeroportoDestino = codigoAeroportoDestino;
      this.nomeEmpresaAerea = nomeEmpresaAerea;
      this.passageiros = [];
    }
  
    adicionarPassageiro(nomePassageiro) {
      this.passageiros.push(nomePassageiro);
    }
  
    getCodigoVoo() {
      return this.codigoVoo;
    }
  
    getCodigoAeroportoOrigem() {
      return this.codigoAeroportoOrigem;
    }
  
    getCodigoAeroportoDestino() {
      return this.codigoAeroportoDestino;
    }
  
    getNomeEmpresaAerea() {
      return this.nomeEmpresaAerea;
    }
  
    getPassageiros() {
      return this.passageiros;
    }
  }
  
  const aeroportos = new Map();
  const voos = new Map();
  
  function adicionarAeroporto() {
    const nome = prompt("Nome:");
    const codigo = prompt("Código:");
    const endereco = prompt("Endereço:");
  
    const aeroporto = new Aeroporto(nome, codigo, endereco);
    aeroportos.set(codigo, aeroporto);
  
    console.log("Aeroporto adicionado com sucesso!");
  }
  
  function adicionarVoo() {
    const codigoVoo = prompt("Código do voo:");
    const codigoAeroportoOrigem = prompt("Código do aeroporto de origem:");
    const codigoAeroportoDestino = prompt("Código do aeroporto de destino:");
    const nomeEmpresaAerea = prompt("Nome da empresa aérea:");
  
    const voo = new Voo(codigoVoo, codigoAeroportoOrigem, codigoAeroportoDestino, nomeEmpresaAerea);
}