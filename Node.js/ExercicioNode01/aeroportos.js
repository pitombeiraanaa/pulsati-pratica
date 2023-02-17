class Aeroporto {
  constructor( codigo, nome) {
    this.codigo = codigo;  
    this.nome = nome;
  }

  getAeroporto(){
    return(`${this.codigo} ${this.nome}`);
  }
}

exports.Aeroporto = Aeroporto;

