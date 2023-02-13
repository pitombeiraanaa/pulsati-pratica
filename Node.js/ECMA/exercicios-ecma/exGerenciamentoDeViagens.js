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




class Voos{
    constructor(nomeEmpresaAerea, codigoVoo, codigoAeroOrigem, codigoAeroDestino){

        this.nomeEmpresaAerea = nomeEmpresaAerea;
        this.codigoVoo = codigoVoo;
        this.codigoAeroOrigem = codigoAeroOrigem;
        this.codigoAeroDestino = codigoAeroDestino;
    }
}

class Passageiros{
    constructor(nome, codigoVoo){
        this.nomePassageiro = nomePassageiro;
        this.codigoVoo = codigoVoo;
    }
}

class Aeroporto{
    constructor(codigoVoo, nomeAeroportoOrigem, nomeAeroportoDestino, nomeTodosPassageiros){
       this.codigoVoo = codigoVoo;
        this.nomeAeroportoOrigem = nomeAeroportoOrigem;
        this.nomeAeroportoDestino = nomeAeroportoDestino;
        this.nomeTodosPassageiros = nomeTodosPassageiros;
    }
}


const 
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });