// refatore o exercicio anteriorcriando um endpoint para: 
// adicionar aeroporto (codigoVoo, nomeAeroportoOrigem)
// adicionar voo (codigoVoo, codigoAeroOrigem, codigoAeroDestino)
// adicionar passageiro (nomePassageiro, codigoVoo)

class Aeroporto {
        constructor(codigoVoo, nomeAeroportoOrigem) {
          this.codigoVoo = codigoVoo;
          this.nomeAeroportoOrigem = nomeAeroportoOrigem;
        }
        getAeroporto() {
          return `${this.codigoVoo} ${this.nomeAeroportoOrigem}`;
        }
      }

      exports.Aeroporto = Aeroporto;

      
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