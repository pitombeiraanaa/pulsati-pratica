let classes = require('./classe_pessoa_fisica');

class Usuario extends classes.PessoaFisica {
  imprimir() {
    console.log(this.nome, this.sobrenome);
  }
}

let usuario = new Usuario('José', 'Silva');
usuario.nome = 'Adriano';
usuario.imprimir();

classes.PessoaFisica.teste();