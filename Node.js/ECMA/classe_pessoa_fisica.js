class PessoaFisica {
    nome = 'Adriano';
    sobrenome = 'Flach';
  
    constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
    }
  
    static teste() {
      console.log('oi');
    }
  }
  
  exports.PessoaFisica = PessoaFisica;